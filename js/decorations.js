const variants = ["daisy", "rose", "violet", "fern", "petal", "leaves"];

const coverLayouts = [
  [
    { variant: "fern", x: -2, y: 7, size: 148, rotation: -29 },
    { variant: "rose", x: 7, y: 12, size: 88, rotation: 18 },
    { variant: "petal", x: 15, y: 5, size: 48, rotation: -16 },
    { variant: "daisy", x: 5, y: 27, size: 67, rotation: 24 },
    { variant: "leaves", x: -1, y: 40, size: 104, rotation: -22 },
    { variant: "violet", x: 9, y: 49, size: 54, rotation: 15 },
    { variant: "petal", x: 3, y: 61, size: 43, rotation: 35 },
    { variant: "rose", x: 10, y: 76, size: 96, rotation: -14 },
    { variant: "fern", x: 2, y: 89, size: 128, rotation: 24 },
    { variant: "daisy", x: 20, y: 94, size: 72, rotation: -20 },
    { variant: "petal", x: 30, y: 101, size: 45, rotation: 31 },
    { variant: "leaves", x: 42, y: 99, size: 67, rotation: -18 },
    { variant: "violet", x: 62, y: 101, size: 49, rotation: 16 },
    { variant: "petal", x: 83, y: 96, size: 41, rotation: -34 },
    { variant: "rose", x: 98, y: 78, size: 76, rotation: 27 },
    { variant: "leaves", x: 101, y: 58, size: 112, rotation: -30 },
    { variant: "daisy", x: 95, y: 30, size: 57, rotation: 12 },
    { variant: "petal", x: 102, y: 18, size: 38, rotation: -15 },
    { variant: "violet", x: 83, y: 3, size: 52, rotation: 22 },
    { variant: "petal", x: 3, y: 20, size: 46, rotation: 14 },
    { variant: "violet", x: 14, y: 33, size: 62, rotation: -26 },
    { variant: "daisy", x: 4, y: 68, size: 74, rotation: 31 },
    { variant: "leaves", x: 18, y: 85, size: 86, rotation: -17 },
    { variant: "rose", x: 28, y: 7, size: 78, rotation: 26 },
    { variant: "petal", x: 53, y: 96, size: 51, rotation: -24 },
    { variant: "violet", x: 92, y: 67, size: 59, rotation: 19 },
    { variant: "fern", x: 88, y: 88, size: 108, rotation: -29 }
  ],
  [
    { variant: "petal", x: 2, y: 15, size: 42, rotation: 28 },
    { variant: "violet", x: -1, y: 37, size: 61, rotation: -17 },
    { variant: "leaves", x: 5, y: 71, size: 87, rotation: 21 },
    { variant: "daisy", x: 16, y: 92, size: 59, rotation: -19 },
    { variant: "petal", x: 31, y: 100, size: 38, rotation: 30 },
    { variant: "fern", x: 55, y: 101, size: 106, rotation: -12 },
    { variant: "rose", x: 73, y: 96, size: 82, rotation: 18 },
    { variant: "violet", x: 88, y: 91, size: 55, rotation: -25 },
    { variant: "leaves", x: 99, y: 84, size: 104, rotation: 30 },
    { variant: "petal", x: 94, y: 72, size: 47, rotation: -11 },
    { variant: "rose", x: 102, y: 61, size: 91, rotation: -24 },
    { variant: "daisy", x: 95, y: 49, size: 65, rotation: 17 },
    { variant: "fern", x: 102, y: 35, size: 142, rotation: -34 },
    { variant: "petal", x: 91, y: 28, size: 41, rotation: 24 },
    { variant: "violet", x: 99, y: 17, size: 58, rotation: -16 },
    { variant: "rose", x: 90, y: 8, size: 92, rotation: 20 },
    { variant: "leaves", x: 76, y: 1, size: 80, rotation: -25 },
    { variant: "daisy", x: 63, y: 4, size: 52, rotation: 14 },
    { variant: "petal", x: 46, y: -1, size: 40, rotation: -32 },
    { variant: "daisy", x: 96, y: 23, size: 71, rotation: 27 },
    { variant: "petal", x: 88, y: 39, size: 45, rotation: -20 },
    { variant: "violet", x: 102, y: 53, size: 66, rotation: 15 },
    { variant: "rose", x: 91, y: 67, size: 84, rotation: -25 },
    { variant: "fern", x: 89, y: 80, size: 118, rotation: 21 },
    { variant: "daisy", x: 80, y: 90, size: 63, rotation: -17 },
    { variant: "leaves", x: 33, y: 96, size: 79, rotation: 25 },
    { variant: "petal", x: 7, y: 82, size: 48, rotation: -29 }
  ],
  [
    { variant: "rose", x: 1, y: 10, size: 73, rotation: -22 },
    { variant: "leaves", x: 11, y: 3, size: 93, rotation: 27 },
    { variant: "petal", x: 26, y: 1, size: 43, rotation: -18 },
    { variant: "violet", x: 47, y: -1, size: 48, rotation: 31 },
    { variant: "daisy", x: 73, y: 3, size: 57, rotation: -14 },
    { variant: "petal", x: 96, y: 16, size: 39, rotation: 22 },
    { variant: "fern", x: 101, y: 39, size: 126, rotation: -26 },
    { variant: "rose", x: 96, y: 59, size: 83, rotation: 19 },
    { variant: "petal", x: 102, y: 75, size: 44, rotation: -31 },
    { variant: "violet", x: 92, y: 90, size: 61, rotation: 16 },
    { variant: "leaves", x: 79, y: 98, size: 96, rotation: -21 },
    { variant: "daisy", x: 64, y: 94, size: 69, rotation: 18 },
    { variant: "petal", x: 55, y: 103, size: 39, rotation: -27 },
    { variant: "rose", x: 43, y: 98, size: 84, rotation: 14 },
    { variant: "fern", x: 29, y: 102, size: 118, rotation: -18 },
    { variant: "violet", x: 17, y: 94, size: 57, rotation: 29 },
    { variant: "petal", x: 7, y: 84, size: 45, rotation: -13 },
    { variant: "daisy", x: -1, y: 72, size: 66, rotation: 20 },
    { variant: "leaves", x: 5, y: 57, size: 88, rotation: -28 },
    { variant: "violet", x: 16, y: 4, size: 61, rotation: -23 },
    { variant: "petal", x: 88, y: 7, size: 45, rotation: 28 },
    { variant: "daisy", x: 97, y: 30, size: 68, rotation: -18 },
    { variant: "rose", x: 90, y: 76, size: 88, rotation: 21 },
    { variant: "petal", x: 72, y: 91, size: 43, rotation: -26 },
    { variant: "violet", x: 52, y: 94, size: 62, rotation: 17 },
    { variant: "daisy", x: 32, y: 93, size: 72, rotation: -21 },
    { variant: "rose", x: 8, y: 69, size: 82, rotation: 26 }
  ]
];

const spreadSlots = [
  { x: -2, y: 78, size: 102, rotation: 17 },
  { x: 101, y: 74, size: 112, rotation: -25 },
  { x: 2, y: 12, size: 72, rotation: -14 },
  { x: 97, y: 8, size: 64, rotation: 29 },
  { x: 20, y: 103, size: 50, rotation: 11 },
  { x: 83, y: 102, size: 56, rotation: -19 },
  { x: 8, y: 96, size: 38, rotation: 34 },
  { x: 94, y: 92, size: 42, rotation: -8 },
  { x: -3, y: 43, size: 48, rotation: -36 },
  { x: 102, y: 42, size: 46, rotation: 20 }
];

const pageCompositions = [
  [
    { kind: "botanical", variant: "petal", x: 75, y: 69, size: 56, rotation: -16 },
    { kind: "botanical", variant: "daisy", x: 17, y: 82, size: 48, rotation: 11 },
    { kind: "botanical", variant: "leaves", x: 94, y: 71, size: 68, rotation: -21 },
    { kind: "imprint", variant: "stamp", x: 88, y: 43, size: 46, rotation: 7, opacity: .22 },
    { kind: "imprint", variant: "pencil", x: 14, y: 53, size: 62, rotation: -6, opacity: .2 }
  ],
  [
    { kind: "botanical", variant: "fern", x: 86, y: 73, size: 82, rotation: 18 },
    { kind: "botanical", variant: "petal", x: 61, y: 85, size: 42, rotation: -29 },
    { kind: "imprint", variant: "coin", x: 18, y: 71, size: 52, rotation: -9, opacity: .18 },
    { kind: "botanical", variant: "daisy", x: 9, y: 45, size: 43, rotation: -13 },
    { kind: "imprint", variant: "pressure", x: 56, y: 88, size: 72, rotation: 3, opacity: .17 },
    { kind: "imprint", variant: "pencil", x: 91, y: 33, size: 55, rotation: 8, opacity: .18 }
  ],
  [
    { kind: "botanical", variant: "rose", x: 21, y: 82, size: 62, rotation: -17 },
    { kind: "botanical", variant: "petal", x: 69, y: 76, size: 39, rotation: 26 },
    { kind: "botanical", variant: "fern", x: 6, y: 49, size: 76, rotation: 24 },
    { kind: "imprint", variant: "vine", x: 92, y: 58, size: 84, rotation: -7, opacity: .21 },
    { kind: "imprint", variant: "corner", x: 82, y: 36, size: 58, rotation: 3, opacity: .18 }
  ],
  [
    { kind: "botanical", variant: "violet", x: 19, y: 76, size: 58, rotation: -24 },
    { kind: "botanical", variant: "petal", x: 67, y: 87, size: 40, rotation: 20 },
    { kind: "botanical", variant: "leaves", x: 95, y: 48, size: 65, rotation: -20 },
    { kind: "imprint", variant: "coin", x: 82, y: 84, size: 45, rotation: 11, opacity: .19 },
    { kind: "imprint", variant: "pencil", x: 12, y: 58, size: 61, rotation: -9, opacity: .2 }
  ],
  [
    { kind: "botanical", variant: "leaves", x: 82, y: 71, size: 74, rotation: -17 },
    { kind: "botanical", variant: "petal", x: 25, y: 86, size: 38, rotation: 31 },
    { kind: "botanical", variant: "rose", x: 95, y: 87, size: 54, rotation: 19 },
    { kind: "imprint", variant: "stamp", x: 15, y: 48, size: 42, rotation: -5, opacity: .2 },
    { kind: "imprint", variant: "pencil", x: 62, y: 57, size: 58, rotation: 5, opacity: .16 }
  ],
  [
    { kind: "botanical", variant: "violet", x: 30, y: 82, size: 55, rotation: -12 },
    { kind: "imprint", variant: "pressure", x: 76, y: 80, size: 88, rotation: -4, opacity: .17 },
    { kind: "botanical", variant: "daisy", x: 92, y: 47, size: 44, rotation: 16 },
    { kind: "imprint", variant: "vine", x: 10, y: 67, size: 69, rotation: 12, opacity: .19 },
    { kind: "imprint", variant: "pencil", x: 59, y: 37, size: 60, rotation: -4, opacity: .17 }
  ],
  [
    { kind: "botanical", variant: "daisy", x: 88, y: 77, size: 55, rotation: 15 },
    { kind: "botanical", variant: "leaves", x: 18, y: 84, size: 68, rotation: -21 },
    { kind: "botanical", variant: "petal", x: 7, y: 58, size: 41, rotation: 27 },
    { kind: "imprint", variant: "pressure", x: 57, y: 86, size: 69, rotation: 4, opacity: .17 },
    { kind: "imprint", variant: "corner", x: 88, y: 39, size: 56, rotation: -5, opacity: .18 }
  ]
];

function seededRandom(seedText) {
  let seed = [...seedText].reduce((total, character) => ((total * 31) + character.charCodeAt(0)) >>> 0, 2166136261);
  return () => {
    seed = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    seed ^= seed + Math.imul(seed ^ (seed >>> 7), 61 | seed);
    return ((seed ^ (seed >>> 14)) >>> 0) / 4294967296;
  };
}

function makeBotanical(variant, slot, random, options = {}) {
  const minOpacity = options.minOpacity ?? .68;
  const opacityVariance = options.opacityVariance ?? .25;
  const minScale = options.minScale ?? .82;
  const scaleVariance = options.scaleVariance ?? .34;
  const element = document.createElement("span");
  element.className = `botanical botanical--${variant}`;
  element.style.setProperty("--botanical-x", `${slot.x + (random() - .5) * 4}%`);
  element.style.setProperty("--botanical-y", `${slot.y + (random() - .5) * 4}%`);
  element.style.setProperty("--botanical-size", `${slot.size * (minScale + random() * scaleVariance)}px`);
  element.style.setProperty("--botanical-rotation", `${slot.rotation + (random() - .5) * 22}deg`);
  element.style.setProperty("--botanical-opacity", `${minOpacity + random() * opacityVariance}`);
  return element;
}

function makeImprint(detail, random) {
  const element = document.createElement("span");
  element.className = `page-imprint page-imprint--${detail.variant}`;
  element.style.setProperty("--imprint-x", `${detail.x + (random() - .5) * 2}%`);
  element.style.setProperty("--imprint-y", `${detail.y + (random() - .5) * 2}%`);
  element.style.setProperty("--imprint-size", `${detail.size * (.94 + random() * .12)}px`);
  element.style.setProperty("--imprint-rotation", `${detail.rotation + (random() - .5) * 6}deg`);
  element.style.setProperty("--imprint-opacity", `${detail.opacity * (.86 + random() * .2)}`);
  return element;
}

function render(container, slots, count, seedText, options) {
  const random = seededRandom(seedText);
  const shuffledSlots = [...slots].sort(() => random() - .5);
  const shuffledVariants = [...variants].sort(() => random() - .5);
  container.replaceChildren(...shuffledSlots.slice(0, count).map((slot, index) => (
    makeBotanical(slot.variant ?? shuffledVariants[index % shuffledVariants.length], slot, random, options)
  )));
}

export function createDecorationController({ cover, spread, ornament }) {
  const coverLayout = coverLayouts[Math.floor(Math.random() * coverLayouts.length)];
  render(cover, coverLayout, coverLayout.length, `cover-${Date.now()}`, {
    minOpacity: .82,
    opacityVariance: .18,
    minScale: .9,
    scaleVariance: .28
  });

  return {
    showSpread(pageNumber, sceneId) {
      const counts = [5, 7, 3, 6, 8, 4, 6];
      const count = counts[(pageNumber - 1) % counts.length];
      render(spread, spreadSlots, count, `${sceneId}-${pageNumber}`);

      const random = seededRandom(`ornament-${sceneId}-${pageNumber}`);
      const composition = pageCompositions[(pageNumber - 1) % pageCompositions.length];
      const details = composition.map((detail) => {
        if (detail.kind === "imprint") return makeImprint(detail, random);
        const botanical = makeBotanical(detail.variant, detail, random);
        botanical.classList.add("botanical--pressed");
        return botanical;
      });
      ornament.replaceChildren(...details);
    }
  };
}
