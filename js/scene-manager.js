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
    this.activeTargetIds = new Set();
    this.found = new Set();
    this.turning = false;
    this.pageComplete = false;
    this.completionTimer = null;
    this.missCount = 0;
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
    if (this.turning || !this.pageComplete || this.els.completion.hidden) return;
    this.turning = true;
    clearTimeout(this.completionTimer);
    this.hints.hide();
    this.ambient.stop();
    this.els.cornerTurn.hidden = true;
    this.els.scene.classList.add("is-preparing-turn");

    const nextScene = this.pickScene();
    const nextChallenge = this.pickChallenge(nextScene);
    await this.preload(nextScene.image);
    this.els.nextImage.src = nextScene.image;
    this.els.nextImage.style.objectPosition = nextScene.mobilePosition;

    playTurn();
    this.els.scene.classList.add("is-turning");
    await wait(prefersReducedMotion.matches ? 120 : 860);

    this.pageNumber += 1;
    this.show(nextScene, nextChallenge, { preloaded: true });
    this.els.scene.classList.remove("is-preparing-turn", "is-turning");
    this.els.scene.classList.add("is-settling");
    await wait(prefersReducedMotion.matches ? 20 : 180);
    this.els.scene.classList.remove("is-settling");
    this.els.nextImage.removeAttribute("src");
    this.turning = false;
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
    this.activeTargetIds = new Set(selectedChallenge.targetIds);
    this.activeTargets = selectedChallenge.targetIds.map((id) => scene.objects.find((item) => item.id === id));
    this.found.clear();
    this.pageComplete = false;
    clearTimeout(this.completionTimer);

    if (!preloaded) this.els.loading.classList.add("is-visible");
    const leftPage = this.pageNumber * 2 - 1;
    const rightPage = leftPage + 1;
    this.els.leftPageNumber.textContent = leftPage;
    this.els.rightPageNumber.textContent = rightPage;
    this.els.leftPageNumber.setAttribute("aria-label", `Page ${leftPage}`);
    this.els.rightPageNumber.setAttribute("aria-label", `Page ${rightPage}`);
    this.els.title.textContent = scene.title;
    this.els.instruction.innerHTML = `<em>${selectedChallenge.instruction}</em>`;
    this.els.completion.hidden = true;
    this.els.cornerTurn.hidden = true;
    this.els.scene.classList.remove("is-complete");
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
    this.current.objects.forEach((item, index) => {
      const isTarget = this.activeTargetIds.has(item.id);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "hotspot";
      button.dataset.id = item.id;
      button.dataset.hint = item.hint;
      button.dataset.target = String(isTarget);
      button.setAttribute("aria-label", isTarget ? `Find ${item.label}` : `Explore ${item.label}`);
      button.style.setProperty("--x", `${item.x}%`);
      button.style.setProperty("--y", `${item.y}%`);
      button.style.setProperty("--w", `${item.width}%`);
      button.style.setProperty("--h", `${item.height}%`);
      button.style.setProperty("--mark-rotate", `${((index % 5) - 2) * 1.5}deg`);
      button.addEventListener("click", () => {
        if (isTarget) this.find(item, button);
        else this.notTarget(item, button);
      });
      this.els.hotspots.append(button);
    });
  }

  hint(button) {
    const item = this.activeTargets.find((target) => target.id === button.dataset.id);
    if (item) this.ambient.hint(item);
  }

  find(item, button) {
    if (this.turning || this.found.has(item.id)) return;
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
    const marks = this.activeTargets.map((item) => {
      const mark = document.createElement("span");
      const isFound = this.found.has(item.id);
      mark.className = `progress__mark${isFound ? " is-found" : ""}`;
      mark.textContent = isFound ? "●" : "○";
      mark.setAttribute("aria-hidden", "true");
      return mark;
    });
    this.els.progressMarks.replaceChildren(...marks);
    this.els.progressText.textContent = `${this.found.size} of ${this.activeTargets.length} found`;
  }

  notTarget(item, button) {
    if (this.turning || this.pageComplete) return;
    this.missCount += 1;
    button.classList.remove("is-reacting");
    void button.offsetWidth;
    button.classList.add("is-reacting");
    setTimeout(() => button.classList.remove("is-reacting"), 520);
    this.ambient.miss(item);
    const message = this.missCount % 3 === 0 ? "Not on this page." : "Not this one.";
    this.ambient.note(item, message);
    this.els.announcer.textContent = message;
    this.hints.schedule();
  }

  emptySpace(x, y) {
    if (this.turning || this.pageComplete) return;
    this.ambient.empty(x, y);
  }

  complete() {
    this.pageComplete = true;
    this.hints.hide();
    this.progress.pagesCompleted += 1;
    this.progress.lastSceneId = this.current.id;
    saveProgress(this.progress);
    this.completionTimer = setTimeout(() => {
      playComplete();
      this.els.scene.classList.add("is-complete");
      this.els.completion.hidden = false;
      this.els.cornerTurn.hidden = false;
      this.els.announcer.textContent = "Page complete. Turn the page when you are ready.";
    }, prefersReducedMotion.matches ? 80 : 520);
  }
}
