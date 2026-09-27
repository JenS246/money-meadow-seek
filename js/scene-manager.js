import { scenes, chooseChallenge } from "./scene-config.js";
import { loadProgress, saveProgress } from "./storage.js";
import { playComplete, playFound, playTurn } from "./audio.js";

const wait = (duration) => new Promise((resolve) => setTimeout(resolve, duration));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

export class SceneManager {
  constructor(elements, hintController, ambientController) {
    this.els = elements;
    this.hints = hintController;
    this.ambient = ambientController;
    this.progress = loadProgress();
    this.pageNumber = this.progress.pagesCompleted + 1;
    this.current = null;
    this.challenge = null;
    this.activeTargets = [];
    this.found = new Set();
    this.history = {
      scenes: this.progress.lastSceneId ? [this.progress.lastSceneId] : [],
      types: [],
      targetSets: []
    };
  }

  start() {
    const initial = this.pickScene();
    this.show(initial, this.pickChallenge(initial));
  }

  pickScene() {
    const recentScenes = this.history.scenes.slice(-2);
    const available = scenes.filter((scene) => !recentScenes.includes(scene.id));
    const pool = available.length ? available : scenes.filter((scene) => scene.id !== this.current?.id);
    return pool[Math.floor(Math.random() * pool.length)];
  }

  pickChallenge(scene) {
    return chooseChallenge(scene, this.history.types.slice(-2), this.history.targetSets.slice(-3));
  }

  async next() {
    this.hints.hide();
    this.ambient.stop();
    this.els.scene.classList.add("is-preparing-turn");

    const nextScene = this.pickScene();
    const nextChallenge = this.pickChallenge(nextScene);
    await this.preload(nextScene.image);
    this.els.nextImage.src = nextScene.image;
    this.els.nextImage.style.objectPosition = nextScene.mobilePosition;

    playTurn();
    this.els.scene.classList.add("is-turning");
    await wait(prefersReducedMotion.matches ? 180 : 760);

    this.pageNumber += 1;
    this.show(nextScene, nextChallenge, { preloaded: true });
    this.els.scene.classList.remove("is-preparing-turn", "is-turning");
    this.els.scene.classList.add("is-settling");
    await wait(prefersReducedMotion.matches ? 20 : 180);
    this.els.scene.classList.remove("is-settling");
    this.els.nextImage.removeAttribute("src");
  }

  preload(source) {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = resolve;
      image.onerror = resolve;
      image.src = source;
    });
  }

  show(scene, selectedChallenge, { preloaded = false } = {}) {
    this.current = scene;
    this.challenge = selectedChallenge;
    this.activeTargets = selectedChallenge.targetIds.map((id) => scene.objects.find((item) => item.id === id));
    this.found.clear();

    if (!preloaded) this.els.loading.classList.add("is-visible");
    this.els.pageNumber.textContent = `Page ${this.pageNumber}`;
    this.els.title.textContent = scene.title;
    this.els.instruction.innerHTML = `<em>${selectedChallenge.instruction}</em>`;
    this.els.completion.hidden = true;
    this.els.announcer.textContent = "";
    this.els.image.alt = `${scene.title}. ${selectedChallenge.instruction}`;
    this.els.scene.style.setProperty("--mobile-position", scene.mobilePosition);
    this.els.image.onload = () => this.els.loading.classList.remove("is-visible");
    this.els.image.src = scene.image;
    if (preloaded || this.els.image.complete) this.els.loading.classList.remove("is-visible");

    this.recordSelection(scene, selectedChallenge);
    this.renderHotspots();
    this.updateProgress();
    this.ambient.start(scene);
    this.hints.schedule();
  }

  recordSelection(scene, selectedChallenge) {
    const targetKey = [...selectedChallenge.targetIds].sort().join("|");
    this.history.scenes.push(scene.id);
    this.history.types.push(selectedChallenge.type);
    this.history.targetSets.push(targetKey);
    this.history.scenes = this.history.scenes.slice(-3);
    this.history.types = this.history.types.slice(-3);
    this.history.targetSets = this.history.targetSets.slice(-4);
  }

  renderHotspots() {
    this.els.hotspots.replaceChildren();
    this.activeTargets.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "hotspot";
      button.dataset.id = item.id;
      button.dataset.hint = item.hint;
      button.setAttribute("aria-label", `Find ${item.label}`);
      button.style.setProperty("--x", `${item.x}%`);
      button.style.setProperty("--y", `${item.y}%`);
      button.style.setProperty("--w", `${item.width}%`);
      button.style.setProperty("--h", `${item.height}%`);
      button.addEventListener("click", () => this.find(item, button));
      this.els.hotspots.append(button);
    });
  }

  hint(button) {
    const item = this.activeTargets.find((target) => target.id === button.dataset.id);
    if (item) this.ambient.hint(item);
  }

  find(item, button) {
    if (this.found.has(item.id)) return;
    this.found.add(item.id);
    button.classList.add("is-found");
    button.setAttribute("aria-label", `Found: ${item.label}`);
    button.setAttribute("aria-pressed", "true");
    this.ambient.found(item);
    playFound();
    this.els.announcer.textContent = `${item.label} found. ${this.found.size} of ${this.activeTargets.length}.`;
    this.updateProgress();
    if (this.found.size === this.activeTargets.length) this.complete();
    else this.hints.schedule();
  }

  updateProgress() {
    this.els.progress.textContent = `${this.found.size} / ${this.activeTargets.length}`;
  }

  complete() {
    this.hints.hide();
    playComplete();
    this.progress.pagesCompleted += 1;
    this.progress.lastSceneId = this.current.id;
    saveProgress(this.progress);
    this.els.completion.hidden = false;
    this.els.announcer.textContent = "Page complete. Turn the page when you are ready.";
    this.els.turnButton.focus();
  }
}
