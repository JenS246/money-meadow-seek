import { SceneManager } from "./scene-manager.js";
import { createHintController } from "./hints.js";
import { toggleSound } from "./audio.js";
import { createAmbientController } from "./ambient-events.js";

const elements = {
  leftPageNumber: document.querySelector("#left-page-number"),
  rightPageNumber: document.querySelector("#right-page-number"),
  title: document.querySelector("#scene-title"),
  instruction: document.querySelector("#instruction"),
  image: document.querySelector("#scene-image"),
  nextImage: document.querySelector("#scene-next-image"),
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
const hintController = createHintController({
  button: document.querySelector("#hint-button"),
  getRemaining: () => [...elements.hotspots.querySelectorAll('.hotspot[data-target="true"]:not(.is-found)')],
  onHint: (button) => manager.hint(button)
});

manager = new SceneManager(elements, hintController, ambientController);
manager.start();
elements.turnButton.addEventListener("click", () => manager.next());
elements.cornerTurn.addEventListener("click", () => manager.next());
elements.scene.addEventListener("click", (event) => {
  if (event.target.closest(".hotspot, .corner-turn")) return;
  const bounds = elements.scene.getBoundingClientRect();
  manager.emptySpace(
    ((event.clientX - bounds.left) / bounds.width) * 100,
    ((event.clientY - bounds.top) / bounds.height) * 100
  );
});

const soundButton = document.querySelector("#sound-button");
const soundLabel = document.querySelector("#sound-label");
soundButton.addEventListener("click", () => {
  const enabled = toggleSound();
  soundButton.setAttribute("aria-pressed", String(enabled));
  soundButton.setAttribute("aria-label", enabled ? "Turn sound off" : "Turn sound on");
  soundLabel.textContent = enabled ? "Sound on" : "Sound off";
});
