import { SceneManager } from "./scene-manager.js";
import { createHintController } from "./hints.js";
import { toggleSound } from "./audio.js";

const elements = {
  pageNumber: document.querySelector("#page-number"),
  title: document.querySelector("#scene-title"),
  instruction: document.querySelector("#instruction"),
  image: document.querySelector("#scene-image"),
  scene: document.querySelector("#scene"),
  hotspots: document.querySelector("#hotspots"),
  loading: document.querySelector("#scene-loading"),
  progress: document.querySelector("#progress"),
  completion: document.querySelector("#completion"),
  turnButton: document.querySelector("#turn-button"),
  session: document.querySelector("#session-count"),
  announcer: document.querySelector("#announcer")
};

let manager;
const hintController = createHintController({
  button: document.querySelector("#hint-button"),
  getRemaining: () => [...elements.hotspots.querySelectorAll(".hotspot:not(.is-found)")]
});

manager = new SceneManager(elements, hintController);
manager.start();
elements.turnButton.addEventListener("click", () => manager.next());

const soundButton = document.querySelector("#sound-button");
const soundLabel = document.querySelector("#sound-label");
soundButton.addEventListener("click", () => {
  const enabled = toggleSound();
  soundButton.setAttribute("aria-pressed", String(enabled));
  soundButton.setAttribute("aria-label", enabled ? "Turn sound off" : "Turn sound on");
  soundLabel.textContent = enabled ? "Sound on" : "Sound off";
});
