export function createHintController({ button, getRemaining, onHint }) {
  let timer;
  let lastHinted;

  const hide = () => { button.hidden = true; clearTimeout(timer); };
  const schedule = () => {
    hide();
    timer = setTimeout(() => { if (getRemaining().length) button.hidden = false; }, 20000);
  };

  button.addEventListener("click", () => {
    const remaining = getRemaining().filter((item) => item !== lastHinted);
    const pool = remaining.length ? remaining : getRemaining();
    const choice = pool[Math.floor(Math.random() * pool.length)];
    if (!choice) return;
    lastHinted = choice;
    onHint(choice);
    button.hidden = true;
    timer = setTimeout(() => button.hidden = false, 20000);
  });

  return { schedule, hide };
}
