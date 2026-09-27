import { scenes } from "./scene-config.js";
import { loadProgress, saveProgress } from "./storage.js";
import { playComplete, playFound, playTurn } from "./audio.js";

export class SceneManager {
  constructor(elements, hintController) {
    this.els = elements;
    this.hints = hintController;
    this.progress = loadProgress();
    this.pageNumber = this.progress.pagesCompleted + 1;
    this.current = null;
    this.found = new Set();
  }

  start() {
    const initial = scenes.find((scene) => scene.id !== this.progress.lastSceneId) || scenes[0];
    this.show(initial);
    this.updateSession();
  }

  next() {
    playTurn();
    this.els.scene.classList.add("is-turning");
    this.hints.hide();
    setTimeout(() => {
      const options = scenes.filter((scene) => scene.id !== this.current.id);
      const next = options[Math.floor(Math.random() * options.length)];
      this.pageNumber += 1;
      this.show(next);
      this.els.scene.classList.remove("is-turning");
      this.els.scene.classList.add("is-arriving");
      setTimeout(() => this.els.scene.classList.remove("is-arriving"), 700);
    }, 520);
  }

  show(scene) {
    this.current = scene;
    this.found.clear();
    this.els.loading.classList.add("is-visible");
    this.els.pageNumber.textContent = `Page ${this.pageNumber}`;
    this.els.title.textContent = scene.title;
    this.els.instruction.innerHTML = `<em>${scene.instruction}</em>`;
    this.els.completion.hidden = true;
    this.els.image.alt = `${scene.title}. ${scene.instruction}`;
    this.els.scene.style.setProperty("--mobile-position", scene.mobilePosition);
    this.els.image.onload = () => this.els.loading.classList.remove("is-visible");
    this.els.image.src = scene.image;
    if (this.els.image.complete) this.els.loading.classList.remove("is-visible");
    this.renderHotspots();
    this.updateProgress();
    this.hints.schedule();
  }

  renderHotspots() {
    this.els.hotspots.replaceChildren();
    this.current.targets.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "hotspot";
      button.dataset.id = item.id;
      button.setAttribute("aria-label", `Find ${item.label}`);
      button.style.left = `${item.x}%`;
      button.style.top = `${item.y}%`;
      button.style.setProperty("--w", `${item.width}%`);
      button.style.setProperty("--h", `${item.height}%`);
      button.addEventListener("click", () => this.find(item, button));
      this.els.hotspots.append(button);
    });
  }

  find(item, button) {
    if (this.found.has(item.id)) return;
    this.found.add(item.id);
    button.classList.remove("is-hinted");
    button.classList.add("is-found");
    button.setAttribute("aria-label", `Found: ${item.label}`);
    button.setAttribute("aria-pressed", "true");
    playFound();
    this.els.announcer.textContent = `${item.label} found. ${this.found.size} of ${this.current.targets.length}.`;
    this.updateProgress();
    if (this.found.size === this.current.targets.length) this.complete();
    else this.hints.schedule();
  }

  updateProgress() {
    this.els.progress.textContent = `${this.found.size} / ${this.current.targets.length} found`;
  }

  complete() {
    this.hints.hide();
    playComplete();
    this.progress.pagesCompleted += 1;
    this.progress.lastSceneId = this.current.id;
    saveProgress(this.progress);
    this.updateSession();
    this.els.completion.hidden = false;
    this.els.announcer.textContent = "Page complete. Turn the page when you are ready.";
    this.els.turnButton.focus();
  }

  updateSession() {
    const count = this.progress.pagesCompleted;
    this.els.session.textContent = `${count} ${count === 1 ? "page" : "pages"} completed`;
  }
}
