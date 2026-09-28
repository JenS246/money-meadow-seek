import { SceneManager } from "./scene-manager.js";
import { createHintController } from "./hints.js";
import { toggleSound } from "./audio.js";
import { createAmbientController } from "./ambient-events.js";
import { createMagnifierController } from "./magnifier.js";
import { createBookFlow } from "./book-flow.js";

const elements = {
  leftPageNumber: document.querySelector("#left-page-number"),
  rightPageNumber: document.querySelector("#right-page-number"),
  sceneNumber: document.querySelector("#scene-number"),
  title: document.querySelector("#scene-title"),
  instruction: document.querySelector("#instruction"),
  image: document.querySelector("#scene-image"),
  nextImage: document.querySelector("#scene-next-image"),
  foldImage: document.querySelector("#page-fold-image"),
  illustrationPage: document.querySelector("#illustration-page"),
  caption: document.querySelector("#scene-caption"),
  scene: document.querySelector("#scene"),
  hotspots: document.querySelector("#hotspots"),
  loading: document.querySelector("#scene-loading"),
  progress: document.querySelector("#progress"),
  progressMarks: document.querySelector("#progress-marks"),
  progressText: document.querySelector("#progress-text"),
  completion: document.querySelector("#completion"),
  turnButton: document.querySelector("#turn-button"),
  cornerTurn: document.querySelector("#corner-turn"),
  announcer: document.querySelector("#announcer")
};

let manager;
const ambientController = createAmbientController(document.querySelector("#ambient"));
elements.scene.tabIndex = -1;
const magnifier = createMagnifierController({
  scene: elements.scene,
  control: document.querySelector("#magnifier-tool"),
  lens: document.querySelector("#magnifier-lens"),
  offset: document.querySelector("#magnifier-offset"),
  world: document.querySelector("#magnifier-world"),
  image: document.querySelector("#magnifier-image"),
  marks: document.querySelector("#magnifier-marks"),
  ambientSource: document.querySelector("#ambient"),
  ambientMirror: document.querySelector("#magnifier-ambient")
});
const hintController = createHintController({
  button: document.querySelector("#hint-button"),
  getRemaining: () => [...elements.hotspots.querySelectorAll('.hotspot[data-target="true"]:not(.is-found)')],
  onHint: (button) => manager.hint(button)
});

manager = new SceneManager(elements, hintController, ambientController, magnifier);
manager.start();
elements.turnButton.addEventListener("click", () => manager.next());
elements.cornerTurn.addEventListener("click", () => manager.next());
elements.scene.addEventListener("click", (event) => {
  if (magnifier.shouldSuppressClick()) return;
  if (event.target.closest(".hotspot, .corner-turn")) return;
  const bounds = elements.scene.getBoundingClientRect();
  manager.emptySpace(
    ((event.clientX - bounds.left) / bounds.width) * 100,
    ((event.clientY - bounds.top) / bounds.height) * 100
  );
});

createBookFlow({
  cover: document.querySelector("#cover-view"),
  closedBook: document.querySelector("#closed-book"),
  intro: document.querySelector("#intro-view"),
  introBook: document.querySelector("#intro-book"),
  game: document.querySelector("#page"),
  openButton: document.querySelector("#cover-open"),
  beginButton: document.querySelector("#intro-begin"),
  coverButtons: [document.querySelector("#intro-cover"), document.querySelector("#show-cover")],
  howButton: document.querySelector("#how-to-play")
});

const soundButton = document.querySelector("#sound-button");
const soundLabel = document.querySelector("#sound-label");
soundButton.addEventListener("click", () => {
  const enabled = toggleSound();
  soundButton.setAttribute("aria-pressed", String(enabled));
  soundButton.setAttribute("aria-label", enabled ? "Turn sound off" : "Turn sound on");
  soundLabel.textContent = enabled ? "Sound on" : "Sound off";
});
