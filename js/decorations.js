const variants = ["daisy", "rose", "violet", "fern", "petal", "leaves"];

const coverSlots = [
  { x: -1, y: 7, size: 134, rotation: -24 },
  { x: 10, y: 17, size: 61, rotation: 31 },
  { x: 7, y: 52, size: 74, rotation: -13 },
  { x: 12, y: 79, size: 112, rotation: 18 },
  { x: 25, y: 96, size: 72, rotation: -9 },
  { x: 42, y: 101, size: 46, rotation: 27 },
  { x: 62, y: 97, size: 54, rotation: -21 },
  { x: 80, y: 94, size: 88, rotation: 14 },
  { x: 97, y: 81, size: 64, rotation: 36 },
  { x: 101, y: 61, size: 142, rotation: -31 },
  { x: 98, y: 34, size: 52, rotation: 7 },
  { x: 91, y: 11, size: 126, rotation: 22 },
  { x: 74, y: 2, size: 58, rotation: -18 },
  { x: 52, y: -2, size: 41, rotation: 39 },
  { x: 30, y: 3, size: 78, rotation: -27 },
  { x: 2, y: 34, size: 45, rotation: 12 }
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
    { kind: "imprint", variant: "stamp", x: 88, y: 43, size: 46, rotation: 7, opacity: .2 }
  ],
  [
    { kind: "botanical", variant: "fern", x: 86, y: 73, size: 82, rotation: 18 },
    { kind: "imprint", variant: "coin", x: 18, y: 71, size: 52, rotation: -9, opacity: .18 },
    { kind: "imprint", variant: "pressure", x: 56, y: 88, size: 72, rotation: 3, opacity: .15 }
  ],
  [
    { kind: "imprint", variant: "vine", x: 92, y: 58, size: 84, rotation: -7, opacity: .19 }
  ],
  [
    { kind: "botanical", variant: "violet", x: 19, y: 76, size: 58, rotation: -24 },
    { kind: "imprint", variant: "coin", x: 82, y: 84, size: 45, rotation: 11, opacity: .16 }
  ],
  [
    { kind: "botanical", variant: "leaves", x: 82, y: 71, size: 74, rotation: -17 },
    { kind: "botanical", variant: "petal", x: 25, y: 86, size: 38, rotation: 31 },
    { kind: "imprint", variant: "stamp", x: 15, y: 48, size: 42, rotation: -5, opacity: .17 }
  ],
  [
    { kind: "imprint", variant: "pressure", x: 76, y: 80, size: 88, rotation: -4, opacity: .17 },
    { kind: "imprint", variant: "vine", x: 10, y: 67, size: 69, rotation: 12, opacity: .16 }
  ],
  [
    { kind: "botanical", variant: "daisy", x: 88, y: 77, size: 55, rotation: 15 }
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

function makeBotanical(variant, slot, random) {
  const element = document.createElement("span");
  element.className = `botanical botanical--${variant}`;
  element.style.setProperty("--botanical-x", `${slot.x + (random() - .5) * 4}%`);
  element.style.setProperty("--botanical-y", `${slot.y + (random() - .5) * 4}%`);
  element.style.setProperty("--botanical-size", `${slot.size * (.82 + random() * .34)}px`);
  element.style.setProperty("--botanical-rotation", `${slot.rotation + (random() - .5) * 22}deg`);
  element.style.setProperty("--botanical-opacity", `${.68 + random() * .25}`);
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

function render(container, slots, count, seedText) {
  const random = seededRandom(seedText);
  const shuffledSlots = [...slots].sort(() => random() - .5);
  const shuffledVariants = [...variants].sort(() => random() - .5);
  container.replaceChildren(...shuffledSlots.slice(0, count).map((slot, index) => (
    makeBotanical(shuffledVariants[index % shuffledVariants.length], slot, random)
  )));
}

export function createDecorationController({ cover, spread, ornament }) {
  render(cover, coverSlots, 10 + Math.floor(Math.random() * 3), `cover-${Date.now()}`);

  return {
    showSpread(pageNumber, sceneId) {
      const counts = [3, 5, 1, 4, 6, 2, 4];
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
