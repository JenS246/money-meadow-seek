const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const clamp = (minimum, value, maximum) => Math.max(minimum, Math.min(value, maximum));

function cue(container, type, x, y, purpose = "ambient") {
  if (reducedMotion.matches) return;
  const element = document.createElement("span");
  element.className = `environment-cue cue--${type} cue--${purpose}`;
  element.style.left = `${x}%`;
  element.style.top = `${y}%`;
  container.append(element);
  element.addEventListener("animationend", () => element.remove(), { once: true });
  setTimeout(() => element.remove(), purpose === "hint" ? 4300 : 2600);
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
    persistHint(item) {
      if (container.querySelector(`[data-hint-id="${item.id}"]`)) return;
      const element = document.createElement("span");
      element.className = `persistent-hint persistent-hint--${item.hint || "rustle"}`;
      element.dataset.hintId = item.id;
      element.style.left = `${item.x}%`;
      element.style.top = `${item.y}%`;
      container.append(element);
    },
    clearHint(itemId) {
      container.querySelector(`[data-hint-id="${itemId}"]`)?.remove();
    },
    found(item) {
      container.querySelector(`[data-hint-id="${item.id}"]`)?.remove();
      cue(container, item.found || item.hint || "shine", item.x, item.y, "found");
    },
    miss(item) {
      cue(container, item.hint || "rustle", item.x, item.y, "miss");

      if (!reducedMotion.matches && currentScene) {
        const bounds = container.getBoundingClientRect();
        const width = Math.max(46, bounds.width * item.width / 100);
        const height = Math.max(46, bounds.height * item.height / 100);
        const wobble = document.createElement("span");
        const image = document.createElement("img");
        wobble.className = "object-wobble";
        wobble.style.left = `${item.x}%`;
        wobble.style.top = `${item.y}%`;
        wobble.style.width = `${width}px`;
        wobble.style.height = `${height}px`;
        image.src = currentScene.image;
        image.alt = "";
        image.style.width = `${bounds.width}px`;
        image.style.height = `${bounds.height}px`;
        image.style.left = `${width / 2 - bounds.width * item.x / 100}px`;
        image.style.top = `${height / 2 - bounds.height * item.y / 100}px`;
        wobble.append(image);
        container.append(wobble);
        setTimeout(() => wobble.remove(), 620);
      }

      const mark = document.createElement("span");
      mark.className = "pencil-x";
      const horizontalOffset = Math.max(4.2, item.width * .72);
      const x = item.x > 78 ? item.x - horizontalOffset : item.x + horizontalOffset;
      const y = item.y < 16 ? item.y + 5 : item.y - 3;
      mark.style.left = `${clamp(4, x, 96)}%`;
      mark.style.top = `${clamp(5, y, 95)}%`;
      container.append(mark);
      setTimeout(() => mark.remove(), 1900);
    },
    empty(x, y) {
      cue(container, "empty", x, y, "empty");
    }
  };
}
