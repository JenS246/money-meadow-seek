let context;
let enabled = false;

function tone(frequency, duration, volume = 0.025) {
  if (!enabled) return;
  context ||= new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(volume, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + duration);
}

export function toggleSound() { enabled = !enabled; return enabled; }
export function playFound() { tone(620, .18); }
export function playComplete() { tone(520, .24); setTimeout(() => tone(760, .26), 90); }
export function playTurn() { tone(210, .18, .012); }
