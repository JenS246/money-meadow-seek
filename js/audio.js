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

function scratch(duration = .12, volume = .012) {
  if (!enabled) return;
  context ||= new AudioContext();
  const buffer = context.createBuffer(1, Math.ceil(context.sampleRate * duration), context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let index = 0; index < data.length; index += 1) {
    const progress = index / data.length;
    data[index] = (Math.random() * 2 - 1) * Math.sin(progress * Math.PI) * .32;
  }
  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  filter.type = "bandpass";
  filter.frequency.value = 1700;
  filter.Q.value = .65;
  gain.gain.value = volume;
  source.buffer = buffer;
  source.connect(filter).connect(gain).connect(context.destination);
  source.start();
}

export function toggleSound() { enabled = !enabled; return enabled; }
export function playFound(kind = "shine") {
  const voices = { rustle: 430, flutter: 510, chime: 690, shine: 620, hop: 560, bob: 470 };
  scratch(.15, .01);
  setTimeout(() => tone(voices[kind] || 610, .16, .018), 45);
}
export function playMiss() { scratch(.1, .009); }
export function playComplete() { tone(520, .24); setTimeout(() => tone(760, .26), 90); }
export function playTurn() {
  if (!enabled) return;
  context ||= new AudioContext();
  const duration = .34;
  const buffer = context.createBuffer(1, context.sampleRate * duration, context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    const envelope = Math.sin((i / data.length) * Math.PI);
    data[i] = (Math.random() * 2 - 1) * envelope * .14;
  }
  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  filter.type = "bandpass";
  filter.frequency.value = 1150;
  filter.Q.value = .8;
  gain.gain.value = .05;
  source.buffer = buffer;
  source.connect(filter).connect(gain).connect(context.destination);
  source.start();
}
