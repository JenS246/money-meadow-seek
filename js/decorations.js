const variants = ["daisy", "rose", "violet", "fern", "petal", "leaves"];

const coverCompositions = [
  [
    { variant: "fern", x: -2, y: 91, size: 206, rotation: 28, layer: 1 },
    { variant: "leaves", x: 8, y: 88, size: 164, rotation: -24, layer: 2 },
    { variant: "rose", x: 13, y: 82, size: 142, rotation: 13, layer: 4 },
    { variant: "daisy", x: 4, y: 75, size: 108, rotation: -18, layer: 3 },
    { variant: "violet", x: 21, y: 91, size: 92, rotation: 24, layer: 5 },
    { variant: "rose", x: 27, y: 96, size: 104, rotation: -17, layer: 3 },
    { variant: "leaves", x: 19, y: 78, size: 118, rotation: 34, layer: 2 },
    { variant: "petal", x: 7, y: 68, size: 58, rotation: 12, layer: 6 },
    { variant: "petal", x: 26, y: 73, size: 46, rotation: -31, layer: 6 },
    { variant: "daisy", x: 31, y: 88, size: 78, rotation: 18, layer: 4 },
    { variant: "leaves", x: 36, y: 96, size: 122, rotation: -18, layer: 1 },
    { variant: "violet", x: 91, y: 13, size: 84, rotation: -16, layer: 3 },
    { variant: "leaves", x: 98, y: 8, size: 126, rotation: 31, layer: 1 },
    { variant: "daisy", x: 95, y: 23, size: 76, rotation: 17, layer: 4 },
    { variant: "petal", x: 47, y: 12, size: 52, rotation: -24, layer: 2 },
    { variant: "petal", x: 55, y: 17, size: 39, rotation: 28, layer: 2 }
  ],
  [
    { variant: "fern", x: -3, y: 8, size: 192, rotation: -25, layer: 1 },
    { variant: "leaves", x: 8, y: 12, size: 152, rotation: 26, layer: 2 },
    { variant: "rose", x: 15, y: 10, size: 138, rotation: -12, layer: 4 },
    { variant: "daisy", x: 4, y: 22, size: 98, rotation: 21, layer: 5 },
    { variant: "violet", x: 23, y: 20, size: 90, rotation: -28, layer: 5 },
    { variant: "leaves", x: 18, y: 4, size: 116, rotation: 34, layer: 2 },
    { variant: "petal", x: 30, y: 9, size: 51, rotation: 18, layer: 6 },
    { variant: "petal", x: 10, y: 31, size: 43, rotation: -22, layer: 6 },
    { variant: "fern", x: 98, y: 96, size: 184, rotation: -28, layer: 1 },
    { variant: "leaves", x: 87, y: 92, size: 146, rotation: 23, layer: 2 },
    { variant: "rose", x: 91, y: 83, size: 132, rotation: -15, layer: 4 },
    { variant: "daisy", x: 78, y: 91, size: 94, rotation: 19, layer: 5 },
    { variant: "violet", x: 99, y: 76, size: 86, rotation: -24, layer: 5 },
    { variant: "petal", x: 82, y: 79, size: 49, rotation: 28, layer: 6 },
    { variant: "leaves", x: 72, y: 97, size: 112, rotation: -19, layer: 1 },
    { variant: "petal", x: 61, y: 13, size: 50, rotation: -31, layer: 2 }
  ],
  [
    { variant: "fern", x: 22, y: 100, size: 176, rotation: -20, layer: 1 },
    { variant: "leaves", x: 34, y: 96, size: 142, rotation: 27, layer: 2 },
    { variant: "rose", x: 43, y: 93, size: 126, rotation: -13, layer: 4 },
    { variant: "daisy", x: 53, y: 97, size: 102, rotation: 19, layer: 5 },
    { variant: "violet", x: 63, y: 93, size: 94, rotation: -25, layer: 5 },
    { variant: "leaves", x: 72, y: 99, size: 136, rotation: 20, layer: 2 },
    { variant: "rose", x: 79, y: 92, size: 118, rotation: -18, layer: 4 },
    { variant: "petal", x: 29, y: 87, size: 51, rotation: 28, layer: 6 },
    { variant: "petal", x: 68, y: 84, size: 45, rotation: -30, layer: 6 },
    { variant: "daisy", x: 87, y: 98, size: 82, rotation: 17, layer: 5 },
    { variant: "fern", x: 101, y: 56, size: 214, rotation: -17, layer: 1 },
    { variant: "leaves", x: 96, y: 49, size: 148, rotation: 24, layer: 2 },
    { variant: "rose", x: 98, y: 66, size: 112, rotation: -16, layer: 4 },
    { variant: "petal", x: 15, y: 15, size: 54, rotation: 24, layer: 3 },
    { variant: "petal", x: 26, y: 9, size: 41, rotation: -27, layer: 3 }
  ],
  [
    { variant: "fern", x: 101, y: 87, size: 205, rotation: -28, layer: 1 },
    { variant: "leaves", x: 94, y: 80, size: 156, rotation: 24, layer: 2 },
    { variant: "rose", x: 96, y: 70, size: 142, rotation: -14, layer: 4 },
    { variant: "daisy", x: 87, y: 87, size: 101, rotation: 20, layer: 5 },
    { variant: "violet", x: 101, y: 58, size: 92, rotation: -26, layer: 5 },
    { variant: "leaves", x: 84, y: 76, size: 128, rotation: 31, layer: 2 },
    { variant: "petal", x: 89, y: 64, size: 52, rotation: 17, layer: 6 },
    { variant: "petal", x: 80, y: 91, size: 44, rotation: -29, layer: 6 },
    { variant: "fern", x: -2, y: 97, size: 168, rotation: 24, layer: 1 },
    { variant: "rose", x: 9, y: 91, size: 118, rotation: -18, layer: 4 },
    { variant: "leaves", x: 17, y: 96, size: 124, rotation: 27, layer: 2 },
    { variant: "violet", x: 19, y: 86, size: 82, rotation: -21, layer: 5 },
    { variant: "petal", x: 54, y: 8, size: 53, rotation: 26, layer: 3 },
    { variant: "petal", x: 61, y: 14, size: 39, rotation: -24, layer: 3 }
  ],
  [
    { variant: "fern", x: 101, y: 8, size: 198, rotation: 24, layer: 1 },
    { variant: "leaves", x: 92, y: 11, size: 158, rotation: -27, layer: 2 },
    { variant: "rose", x: 88, y: 14, size: 139, rotation: 15, layer: 4 },
    { variant: "daisy", x: 99, y: 23, size: 104, rotation: -18, layer: 5 },
    { variant: "violet", x: 80, y: 7, size: 92, rotation: 25, layer: 5 },
    { variant: "leaves", x: 84, y: 24, size: 126, rotation: -31, layer: 2 },
    { variant: "petal", x: 76, y: 19, size: 49, rotation: 21, layer: 6 },
    { variant: "petal", x: 96, y: 34, size: 43, rotation: -28, layer: 6 },
    { variant: "fern", x: -4, y: 48, size: 206, rotation: -19, layer: 1 },
    { variant: "leaves", x: 5, y: 52, size: 146, rotation: 27, layer: 2 },
    { variant: "rose", x: 12, y: 55, size: 121, rotation: -16, layer: 4 },
    { variant: "violet", x: 16, y: 45, size: 84, rotation: 22, layer: 5 },
    { variant: "daisy", x: 39, y: 98, size: 97, rotation: -17, layer: 4 },
    { variant: "leaves", x: 48, y: 101, size: 132, rotation: 24, layer: 1 },
    { variant: "petal", x: 46, y: 90, size: 46, rotation: -25, layer: 5 }
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
    { kind: "botanical", variant: "rose", x: 7, y: 79, size: 132, rotation: -19, opacity: .46 },
    { kind: "botanical", variant: "petal", x: 24, y: 88, size: 44, rotation: 24, opacity: .4 }
  ],
  [
    { kind: "botanical", variant: "fern", x: 69, y: 93, size: 174, rotation: 14, opacity: .3 }
  ],
  [
    { kind: "botanical", variant: "petal", x: 72, y: 76, size: 52, rotation: -18, opacity: .46 },
    { kind: "botanical", variant: "petal", x: 83, y: 82, size: 39, rotation: 29, opacity: .38 },
    { kind: "imprint", variant: "pencil", x: 66, y: 86, size: 82, rotation: -6, opacity: .18 }
  ],
  [
    { kind: "imprint", variant: "coin", x: 91, y: 70, size: 74, rotation: 9, opacity: .2 }
  ],
  [
    { kind: "botanical", variant: "leaves", x: 98, y: 69, size: 156, rotation: -22, opacity: .39 }
  ],
  [
    { kind: "imprint", variant: "pressure", x: 24, y: 86, size: 116, rotation: -5, opacity: .16 }
  ],
  [
    { kind: "botanical", variant: "daisy", x: 9, y: 82, size: 104, rotation: 16, opacity: .43 },
    { kind: "botanical", variant: "petal", x: 23, y: 73, size: 42, rotation: -24, opacity: .36 }
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
  element.style.setProperty("--botanical-opacity", `${slot.opacity ?? (minOpacity + random() * opacityVariance)}`);
  element.style.setProperty("--botanical-layer", `${slot.layer ?? 1}`);
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
  const coverComposition = coverCompositions[Math.floor(Math.random() * coverCompositions.length)];
  render(cover, coverComposition, coverComposition.length, `cover-${Date.now()}`, {
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
