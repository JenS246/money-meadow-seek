const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

export function createMagnifierController({ scene, control, lens, offset, world, image, marks, ambientSource, ambientMirror }) {
  const zoom = 1.85;
  let active = false;
  let transient = false;
  let suppressClick = false;
  let holdTimer;
  let point = { x: .56, y: .48 };

  const draw = () => {
    const bounds = scene.getBoundingClientRect();
    const size = lens.offsetWidth || 144;
    const x = point.x * bounds.width;
    const y = point.y * bounds.height;
    lens.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0)`;
    world.style.width = `${bounds.width}px`;
    world.style.height = `${bounds.height}px`;
    world.style.transform = `translate3d(${size / 2 - x * zoom}px, ${size / 2 - y * zoom}px, 0) scale(${zoom})`;
  };

  const move = (clientX, clientY) => {
    const bounds = scene.getBoundingClientRect();
    point = {
      x: Math.max(0, Math.min(1, (clientX - bounds.left) / bounds.width)),
      y: Math.max(0, Math.min(1, (clientY - bounds.top) / bounds.height))
    };
    draw();
  };

  const show = () => { lens.hidden = false; active = true; draw(); };
  const hide = () => {
    lens.hidden = true;
    active = false;
    transient = false;
    control.setAttribute("aria-pressed", "false");
  };

  control.addEventListener("click", () => {
    if (active) hide();
    else { show(); control.setAttribute("aria-pressed", "true"); scene.focus({ preventScroll: true }); }
  });

  scene.addEventListener("pointermove", (event) => {
    if (active) move(event.clientX, event.clientY);
  });
  scene.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" || active) return;
    holdTimer = setTimeout(() => {
      transient = true;
      suppressClick = true;
      show();
      move(event.clientX, event.clientY);
    }, 320);
  });
  const endHold = () => {
    clearTimeout(holdTimer);
    if (transient) hide();
  };
  scene.addEventListener("pointerup", endHold);
  scene.addEventListener("pointercancel", endHold);
  scene.addEventListener("pointerleave", () => { if (transient) endHold(); });
  scene.addEventListener("keydown", (event) => {
    if (!active) return;
    const directions = { ArrowLeft: [-.035, 0], ArrowRight: [.035, 0], ArrowUp: [0, -.035], ArrowDown: [0, .035] };
    if (event.key === "Escape") { hide(); control.focus(); return; }
    if (!directions[event.key]) return;
    event.preventDefault();
    point.x = Math.max(0, Math.min(1, point.x + directions[event.key][0]));
    point.y = Math.max(0, Math.min(1, point.y + directions[event.key][1]));
    draw();
  });

  const observer = new MutationObserver((changes) => {
    changes.forEach((change) => {
      change.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return;
        const clone = node.cloneNode(true);
        ambientMirror.append(clone);
        if (!node.classList.contains("persistent-hint")) {
          setTimeout(() => clone.remove(), node.classList.contains("cue--hint") ? 4300 : 2600);
        }
      });
      change.removedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement) || !node.dataset.hintId) return;
        ambientMirror.querySelector(`[data-hint-id="${node.dataset.hintId}"]`)?.remove();
      });
    });
  });
  observer.observe(ambientSource, { childList: true });

  return {
    setImage(source) { image.src = source; },
    resetMarks() { marks.replaceChildren(); hide(); },
    addFound(button) {
      const mark = document.createElement("span");
      mark.className = "lens-mark";
      ["--x", "--y", "--w", "--h", "--mark-rotate", "--mark-stroke", "--mark-x"].forEach((name) => {
        mark.style.setProperty(name, button.style.getPropertyValue(name));
      });
      mark.innerHTML = '<span class="found-check" aria-hidden="true"></span>';
      marks.append(mark);
    },
    nudge(button) {
      const wasActive = active;
      point = { x: parseFloat(button.style.getPropertyValue("--x")) / 100, y: parseFloat(button.style.getPropertyValue("--y")) / 100 };
      show();
      lens.classList.remove("is-nudged");
      void lens.offsetWidth;
      lens.classList.add("is-nudged");
      if (!reducedMotion.matches) setTimeout(() => lens.classList.remove("is-nudged"), 700);
      if (!wasActive) setTimeout(hide, reducedMotion.matches ? 300 : 1050);
    },
    hide,
    shouldSuppressClick() {
      if (!suppressClick) return false;
      suppressClick = false;
      return true;
    }
  };
}
