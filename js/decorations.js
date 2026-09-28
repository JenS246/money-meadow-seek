const variants = ["daisy", "rose", "violet", "fern", "petal", "leaves"];

const coverSlots = [
  { x: 3, y: 9, size: 124, rotation: -22 },
  { x: 13, y: 76, size: 102, rotation: 18 },
  { x: 27, y: 94, size: 68, rotation: -9 },
  { x: 89, y: 12, size: 118, rotation: 21 },
  { x: 96, y: 62, size: 132, rotation: -31 },
  { x: 77, y: 93, size: 74, rotation: 13 },
  { x: 6, y: 48, size: 56, rotation: 37 },
  { x: 69, y: 5, size: 50, rotation: -18 },
  { x: 40, y: 97, size: 44, rotation: 26 },
  { x: 99, y: 31, size: 48, rotation: 8 }
];

const spreadSlots = [
  { x: -2, y: 77, size: 92, rotation: 17 },
  { x: 101, y: 73, size: 104, rotation: -25 },
  { x: 3, y: 11, size: 66, rotation: -14 },
  { x: 96, y: 9, size: 58, rotation: 29 },
  { x: 23, y: 103, size: 42, rotation: 11 },
  { x: 81, y: 102, size: 48, rotation: -19 }
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

function render(container, slots, count, seedText) {
  const random = seededRandom(seedText);
  const shuffledSlots = [...slots].sort(() => random() - .5);
  const shuffledVariants = [...variants].sort(() => random() - .5);
  container.replaceChildren(...shuffledSlots.slice(0, count).map((slot, index) => (
    makeBotanical(shuffledVariants[index % shuffledVariants.length], slot, random)
  )));
}

export function createDecorationController({ cover, spread, ornament }) {
  render(cover, coverSlots, 7 + Math.floor(Math.random() * 3), `cover-${Date.now()}`);

  return {
    showSpread(pageNumber, sceneId) {
      const counts = [1, 3, 0, 2, 4, 1];
      const count = counts[(pageNumber - 1) % counts.length];
      render(spread, spreadSlots, count, `${sceneId}-${pageNumber}`);

      ornament.replaceChildren();
      if (pageNumber % 3 === 0) return;
      const random = seededRandom(`ornament-${sceneId}-${pageNumber}`);
      const variant = pageNumber % 3 === 1 ? "petal" : ["fern", "leaves", "violet"][Math.floor(random() * 3)];
      const detail = makeBotanical(variant, { x: 67 + random() * 12, y: 66 + random() * 8, size: 45 + random() * 22, rotation: -18 + random() * 36 }, random);
      ornament.append(detail);
    }
  };
}
