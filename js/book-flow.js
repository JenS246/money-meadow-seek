import { loadProgress, saveProgress } from "./storage.js";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const wait = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

export function createBookFlow({ cover, closedBook, intro, introBook, game, openButton, beginButton, coverButtons, howButton }) {
  let fromGame = false;

  const showOnly = (view) => {
    [cover, intro, game].forEach((item) => { item.hidden = item !== view; });
  };

  const showGame = async () => {
    introBook.classList.add("is-turning");
    await wait(reducedMotion.matches ? 20 : 650);
    showOnly(game);
    introBook.classList.remove("is-turning");
    game.classList.add("is-opening");
    requestAnimationFrame(() => game.classList.remove("is-opening"));
  };

  const showCover = async () => {
    if (!game.hidden) {
      game.classList.add("is-closing");
      await wait(reducedMotion.matches ? 20 : 480);
      game.classList.remove("is-closing");
    }
    showOnly(cover);
    closedBook.classList.remove("is-opening");
    openButton.focus({ preventScroll: true });
  };

  openButton.addEventListener("click", async () => {
    closedBook.classList.add("is-opening");
    await wait(reducedMotion.matches ? 20 : 780);
    if (loadProgress().seenInstructions) showOnly(game);
    else showOnly(intro);
  });

  beginButton.addEventListener("click", () => {
    saveProgress({ seenInstructions: true });
    showGame();
  });

  howButton.addEventListener("click", () => {
    fromGame = true;
    beginButton.textContent = "Back to meadow";
    showOnly(intro);
  });

  coverButtons.forEach((button) => button.addEventListener("click", showCover));

  if (loadProgress().seenInstructions) showOnly(game);
  else showOnly(cover);

  return { showCover, showGame, get fromGame() { return fromGame; } };
}
