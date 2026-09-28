const HINT_DELAY = 17000;
const REVEAL_DELAY = 12000;
const SKIP_DELAY = 41000;

export function createHintController({ button, showOneButton, skipButton, getRemaining, onHint, onPersistentHint, onShowOne, onSkip }) {
  let hintTimer;
  let revealTimer;
  let skipTimer;
  let reEnableTimer;
  let lastHinted;

  const clearTimers = () => {
    clearTimeout(hintTimer);
    clearTimeout(revealTimer);
    clearTimeout(skipTimer);
    clearTimeout(reEnableTimer);
  };

  const chooseRemaining = () => {
    const remaining = getRemaining();
    const fresh = remaining.filter((item) => item !== lastHinted);
    const pool = fresh.length ? fresh : remaining;
    return pool[Math.floor(Math.random() * pool.length)];
  };

  const hide = () => {
    clearTimers();
    button.hidden = true;
    showOneButton.hidden = true;
    skipButton.hidden = true;
  };

  const schedule = () => {
    hide();
    lastHinted = undefined;
    hintTimer = setTimeout(() => {
      if (getRemaining().length) button.hidden = false;
    }, HINT_DELAY);
    skipTimer = setTimeout(() => {
      if (getRemaining().length) skipButton.hidden = false;
    }, SKIP_DELAY);
  };

  button.addEventListener("click", () => {
    const choice = chooseRemaining();
    if (!choice) return;
    lastHinted = choice;
    onHint(choice);
    button.hidden = true;
    clearTimeout(revealTimer);
    revealTimer = setTimeout(() => {
      if (!getRemaining().length) return;
      onPersistentHint(choice);
      button.hidden = false;
      showOneButton.hidden = false;
    }, REVEAL_DELAY);
  });

  showOneButton.addEventListener("click", () => {
    const remaining = getRemaining();
    const choice = remaining.includes(lastHinted) ? lastHinted : chooseRemaining();
    if (!choice) return;
    showOneButton.hidden = true;
    onShowOne(choice);
    if (!getRemaining().length) {
      skipButton.hidden = true;
      return;
    }
    skipButton.hidden = false;
    reEnableTimer = setTimeout(() => {
      if (getRemaining().length) showOneButton.hidden = false;
    }, 900);
  });

  skipButton.addEventListener("click", onSkip);

  return { schedule, hide };
}
