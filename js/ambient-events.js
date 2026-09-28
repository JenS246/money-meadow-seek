const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function cue(container, type, x, y, purpose = "ambient") {
  if (reducedMotion.matches) return;
  const element = document.createElement("span");
  element.className = `environment-cue cue--${type} cue--${purpose}`;
  element.style.left = `${x}%`;
  element.style.top = `${y}%`;
  container.append(element);
  element.addEventListener("animationend", () => element.remove(), { once: true });
  setTimeout(() => element.remove(), 2600);
}

export function createAmbientController(container) {
  let timer;
  let currentScene;

  const schedule = () => {
    clearTimeout(timer);
    if (!currentScene || reducedMotion.matches) return;
    timer = setTimeout(() => {
      const { type, x, y } = currentScene.ambient;
      cue(container, type, x, y);
      schedule();
    }, 14000 + Math.random() * 12000);
  };

  return {
    start(scene) {
      currentScene = scene;
      container.replaceChildren();
      schedule();
    },
    stop() {
      clearTimeout(timer);
      container.replaceChildren();
    },
    hint(item) {
      cue(container, item.hint || "rustle", item.x, item.y, "hint");
    },
    found(item) {
      cue(container, item.found || item.hint || "shine", item.x, item.y, "found");
    },
    miss(item) {
      cue(container, item.hint || "rustle", item.x, item.y, "miss");
    },
    empty(x, y) {
      cue(container, "empty", x, y, "empty");
    }
  };
}
