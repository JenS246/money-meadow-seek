const target = (id, label, x, y, {
  size = 5,
  tags = [],
  difficulty = "medium",
  hint = "rustle",
  found = hint
} = {}) => ({ id, label, x, y, width: size, height: size, tags, difficulty, hint, found });

const challenge = (type, instruction, targetIds) => ({ type, instruction, targetIds });

export const scenes = [
  {
    id: "cottage-garden", image: "./assets/scenes/cottage-garden.png", title: "The cottage garden",
    layout: "full",
    mobilePosition: "48% 50%", ambient: { type: "butterfly", x: 62, y: 32 },
    objects: [
      target("key", "brass key", 13, 82, { size: 6, tags: ["metal", "lost-object", "pocket-sized"], difficulty: "easy", hint: "glint" }),
      target("marble", "blue glass marble", 52, 78, { tags: ["round", "lost-object", "pocket-sized"], hint: "shine" }),
      target("bill", "folded five-dollar bill", 93, 14, { size: 7, tags: ["money", "paper", "number", "lost-object"], difficulty: "easy", hint: "lift" }),
      target("ribbon", "red ribbon", 73, 24, { size: 7, tags: ["red", "lost-object"], difficulty: "easy", hint: "flutter" }),
      target("coin", "silver coin", 31, 62, { tags: ["money", "metal", "round", "number", "pocket-sized"], difficulty: "hard", hint: "glint" }),
      target("watering-can", "watering can", 12, 42, { size: 7, tags: ["metal", "garden"], hint: "glint" }),
      target("robin", "bird on the bench", 27, 31, { size: 6, tags: ["natural", "duplicate"], hint: "flutter" }),
      target("birdbath-bird", "bird at the birdbath", 93, 36, { size: 6, tags: ["natural", "duplicate"], hint: "flutter" }),
      target("bench", "garden bench", 20, 31, { size: 9, tags: ["garden"], difficulty: "easy" }),
      target("gate", "wooden gate", 37, 29, { size: 8, tags: ["garden"] })
    ],
    challenges: [
      challenge("money", "Find the money.", ["bill", "coin"]),
      challenge("pocket", "Find 3 pocket-sized things.", ["key", "marble", "coin"]),
      challenge("duplicate", "Find both birds.", ["robin", "birdbath-bird"]),
      challenge("red", "Find the red ribbon.", ["ribbon"]),
      challenge("metal", "Find 3 metal things.", ["key", "coin", "watering-can"])
    ]
  },
  {
    id: "rain-meadow", image: "./assets/scenes/rain-meadow.png", title: "After the rain",
    layout: "captioned", caption: "After a passing shower.",
    mobilePosition: "52% 50%", ambient: { type: "raindrop", x: 82, y: 32 },
    objects: [
      target("stamp", "green postage stamp", 7, 17, { size: 7, tags: ["paper", "number", "lost-object", "pocket-sized"], difficulty: "easy", hint: "lift" }),
      target("ring", "gold ring", 77, 26, { tags: ["metal", "round", "lost-object", "pocket-sized"], hint: "glint" }),
      target("boat", "paper boat", 52, 58, { size: 7, tags: ["paper", "lost-object"], difficulty: "easy", hint: "ripple" }),
      target("button", "pearl button", 87, 80, { tags: ["round", "lost-object", "pocket-sized"], hint: "shine" }),
      target("coin", "copper coin", 14, 83, { size: 6, tags: ["money", "metal", "round", "number", "pocket-sized"], hint: "glint" }),
      target("dew-drop", "large drop of water", 94, 20, { size: 6, tags: ["natural", "round", "moved"], difficulty: "hard", hint: "drop" }),
      target("violets", "purple violets", 23, 43, { size: 7, tags: ["natural", "purple"], hint: "tremble" }),
      target("yellow-flower", "yellow buttercup", 22, 19, { size: 6, tags: ["natural", "yellow"], hint: "tremble" }),
      target("daisy", "white daisy", 91, 47, { size: 7, tags: ["natural", "round"], difficulty: "easy", hint: "tremble" })
    ],
    challenges: [
      challenge("round", "Find 3 round things.", ["ring", "button", "coin"]),
      challenge("paper", "Find 2 paper things.", ["stamp", "boat"]),
      challenge("metal", "Find 2 metal things.", ["ring", "coin"]),
      challenge("motion", "What moved?", ["dew-drop"]),
      challenge("pocket", "Find 4 pocket-sized things.", ["stamp", "ring", "button", "coin"])
    ]
  },
  {
    id: "stone-wall", image: "./assets/scenes/stone-wall.png", title: "The old wall",
    layout: "plate",
    mobilePosition: "54% 50%", ambient: { type: "insect", x: 58, y: 38 },
    objects: [
      target("coin", "old coin", 20, 8, { tags: ["money", "metal", "round", "number", "pocket-sized"], difficulty: "easy", hint: "glint" }),
      target("bill", "folded banknote", 46, 17, { size: 7, tags: ["money", "paper", "number", "lost-object"], hint: "lift" }),
      target("thimble", "brass thimble", 61, 43, { tags: ["metal", "lost-object", "pocket-sized"], difficulty: "hard", hint: "glint" }),
      target("top", "red toy top", 50, 74, { size: 6, tags: ["round", "red", "lost-object", "pocket-sized"], difficulty: "easy", hint: "wobble" }),
      target("feather", "white feather", 84, 73, { size: 7, tags: ["natural", "lost-object", "pocket-sized", "moved"], difficulty: "easy", hint: "flutter" }),
      target("pink-flower", "pink wild rose", 16, 15, { size: 6, tags: ["natural", "pink"], hint: "tremble" }),
      target("foxglove", "purple foxglove", 86, 44, { size: 7, tags: ["natural", "purple"], hint: "tremble" }),
      target("buttercup", "yellow buttercup", 72, 66, { size: 6, tags: ["natural", "yellow"], difficulty: "hard", hint: "tremble" }),
      target("ivy", "ivy leaf", 54, 18, { size: 7, tags: ["natural", "green"], hint: "rustle" })
    ],
    challenges: [
      challenge("money", "Find the money.", ["coin", "bill"]),
      challenge("metal", "Find 2 small metal things.", ["coin", "thimble"]),
      challenge("number", "Find 2 numbered things.", ["coin", "bill"]),
      challenge("lost", "Find 5 lost things.", ["coin", "bill", "thimble", "top", "feather"]),
      challenge("motion", "What moved?", ["feather"])
    ]
  },
  {
    id: "greenhouse", image: "./assets/scenes/greenhouse.png", title: "The glass house",
    layout: "tall",
    mobilePosition: "48% 50%", ambient: { type: "condensation", x: 54, y: 20 },
    objects: [
      target("star", "porcelain star", 11, 9, { tags: ["lost-object", "pocket-sized"], difficulty: "easy", hint: "shine" }),
      target("watch", "pocket watch", 43, 54, { size: 6, tags: ["metal", "round", "number", "lost-object", "pocket-sized"], difficulty: "easy", hint: "glint" }),
      target("ribbon", "blue ribbon", 88, 17, { size: 7, tags: ["lost-object", "blue", "moved"], difficulty: "easy", hint: "flutter" }),
      target("card", "playing card", 89, 84, { size: 7, tags: ["paper", "number", "lost-object", "pocket-sized"], hint: "lift" }),
      target("coin", "silver coin", 12, 77, { tags: ["money", "metal", "round", "number", "pocket-sized"], difficulty: "hard", hint: "glint" }),
      target("watering-can", "watering can", 84, 25, { size: 9, tags: ["metal", "garden"], difficulty: "easy", hint: "glint" }),
      target("books", "stack of books", 21, 25, { size: 9, tags: ["paper", "lost-object"], difficulty: "easy", hint: "lift" }),
      target("bird", "bird in the rafters", 60, 5, { size: 6, tags: ["natural", "moved"], hint: "flutter" }),
      target("stone-face", "stone face", 11, 51, { size: 7, tags: ["garden", "round"], difficulty: "hard", hint: "shine" }),
      target("chair", "iron chair", 68, 42, { size: 8, tags: ["metal", "garden"], hint: "glint" })
    ],
    challenges: [
      challenge("number", "Find 3 numbered things.", ["watch", "card", "coin"]),
      challenge("metal", "Find 4 metal things.", ["watch", "coin", "watering-can", "chair"]),
      challenge("lost", "Find 5 misplaced things.", ["star", "watch", "ribbon", "card", "coin"]),
      challenge("paper", "Find 2 paper things.", ["card", "books"]),
      challenge("motion", "What moved?", ["ribbon"]),
      challenge("not-touching", "What isn't touching a plant?", ["bird"])
    ]
  },
  {
    id: "woodland-edge", image: "./assets/scenes/woodland-edge.png", title: "Where the woods begin",
    layout: "full",
    mobilePosition: "49% 50%", ambient: { type: "fern", x: 51, y: 62 },
    objects: [
      target("compass", "brass compass", 12, 72, { size: 7, tags: ["metal", "round", "lost-object", "pocket-sized"], difficulty: "easy", hint: "glint" }),
      target("coin", "silver coin", 48, 29, { tags: ["money", "metal", "round", "number", "pocket-sized"], hint: "glint" }),
      target("mitten", "red mitten", 46, 74, { size: 6, tags: ["red", "lost-object", "pocket-sized"], difficulty: "easy", hint: "rustle" }),
      target("bill", "folded ten-dollar bill", 70, 57, { size: 8, tags: ["money", "paper", "number", "lost-object"], hint: "lift" }),
      target("bead", "blue glass bead", 87, 78, { tags: ["round", "blue", "lost-object", "pocket-sized"], hint: "shine" }),
      target("butterfly", "orange butterfly", 97, 45, { size: 7, tags: ["natural", "moved"], hint: "flutter" }),
      target("lily", "lily of the valley", 39, 76, { size: 7, tags: ["natural", "white"], difficulty: "hard", hint: "tremble" }),
      target("violet", "purple violet", 3, 57, { size: 6, tags: ["natural", "purple"], hint: "tremble" }),
      target("white-flower", "white woodland flower", 86, 78, { size: 7, tags: ["natural", "white"], hint: "tremble" })
    ],
    challenges: [
      challenge("money", "Find the money.", ["coin", "bill"]),
      challenge("round", "Find 3 round things.", ["compass", "coin", "bead"]),
      challenge("pocket", "Find 4 pocket-sized things.", ["compass", "coin", "mitten", "bead"]),
      challenge("lost", "Find 5 lost things.", ["compass", "coin", "mitten", "bill", "bead"]),
      challenge("motion", "What moved?", ["butterfly"])
    ]
  },
  {
    id: "rose-path", image: "./assets/scenes/rose-path.png", title: "The rose path",
    layout: "captioned", caption: "The path at dusk.",
    mobilePosition: "52% 50%", ambient: { type: "petal", x: 45, y: 26 },
    objects: [
      target("coin", "copper coin", 12, 11, { tags: ["money", "metal", "round", "number", "pocket-sized"], difficulty: "easy", hint: "glint" }),
      target("tag", "numbered paper tag", 85, 17, { size: 7, tags: ["paper", "number", "lost-object", "pocket-sized"], difficulty: "easy", hint: "lift" }),
      target("scissors", "brass scissors", 28, 61, { size: 7, tags: ["metal", "lost-object", "pocket-sized"], hint: "glint" }),
      target("moon", "crescent brooch", 54, 86, { size: 6, tags: ["metal", "round", "lost-object", "pocket-sized"], difficulty: "easy", hint: "shine" }),
      target("shell", "white shell", 91, 84, { size: 7, tags: ["natural", "lost-object", "pocket-sized"], hint: "shine" }),
      target("bird", "bird at the fountain", 85, 42, { size: 7, tags: ["natural", "moved"], hint: "flutter" }),
      target("rose", "open pink rose", 16, 31, { size: 7, tags: ["natural", "pink", "round"], hint: "tremble" }),
      target("statue", "small stone statue", 22, 43, { size: 7, tags: ["garden"], difficulty: "hard", hint: "shine" }),
      target("firefly-left", "firefly by the arch", 32, 38, { tags: ["natural", "duplicate", "moved"], difficulty: "hard", hint: "glow" }),
      target("firefly-right", "firefly by the path", 65, 58, { tags: ["natural", "duplicate", "moved"], difficulty: "hard", hint: "glow" }),
      target("fallen-petal", "fallen rose petal", 62, 87, { size: 6, tags: ["natural", "pink", "moved"], difficulty: "hard", hint: "flutter" })
    ],
    challenges: [
      challenge("number", "Find 2 numbered things.", ["coin", "tag"]),
      challenge("metal", "Find 3 metal things.", ["coin", "scissors", "moon"]),
      challenge("lost", "Find 4 lost things.", ["tag", "scissors", "moon", "shell"]),
      challenge("duplicate", "Find both matching lights.", ["firefly-left", "firefly-right"]),
      challenge("motion", "What moved?", ["fallen-petal"]),
      challenge("other-page", "What doesn't belong?", ["shell"])
    ]
  },
  {
    id: "summer-field", image: "./assets/scenes/summer-field.png", title: "Late summer",
    layout: "tall",
    mobilePosition: "52% 50%", ambient: { type: "seed", x: 68, y: 38 },
    objects: [
      target("bill", "folded banknote", 12, 18, { size: 8, tags: ["money", "paper", "number", "lost-object"], difficulty: "easy", hint: "lift" }),
      target("marble", "red glass marble", 19, 83, { tags: ["round", "red", "lost-object", "pocket-sized"], hint: "shine" }),
      target("spoon", "silver spoon", 46, 80, { size: 7, tags: ["metal", "lost-object", "pocket-sized"], difficulty: "easy", hint: "glint" }),
      target("coin", "brass coin", 63, 58, { tags: ["money", "metal", "round", "number", "pocket-sized"], hint: "glint" }),
      target("feather", "blue feather", 93, 30, { size: 7, tags: ["natural", "blue", "lost-object", "pocket-sized", "moved"], difficulty: "easy", hint: "flutter" }),
      target("apple", "red apple", 72, 9, { size: 6, tags: ["natural", "round", "red", "pocket-sized"], difficulty: "hard", hint: "rustle" }),
      target("poppy-left", "left red poppy", 34, 26, { size: 7, tags: ["natural", "red", "round", "duplicate"], hint: "tremble" }),
      target("poppy-right", "right red poppy", 73, 44, { size: 7, tags: ["natural", "red", "round", "duplicate"], hint: "tremble" }),
      target("daisy", "white daisy", 50, 66, { size: 7, tags: ["natural", "round"], hint: "tremble" })
    ],
    challenges: [
      challenge("money", "Find the money.", ["bill", "coin"]),
      challenge("round", "Find 3 round things.", ["marble", "coin", "apple"]),
      challenge("metal", "Find 2 metal things.", ["spoon", "coin"]),
      challenge("pocket", "Find 4 pocket-sized things.", ["marble", "spoon", "coin", "feather"]),
      challenge("motion", "What moved?", ["feather"]),
      challenge("red", "Find 2 red things.", ["marble", "poppy-left"]),
      challenge("smallest-money", "Find the smallest coin.", ["coin"])
    ]
  },
  {
    id: "secret-garden", image: "./assets/scenes/secret-garden.png", title: "The impossible garden",
    layout: "plate",
    mobilePosition: "51% 50%", ambient: { type: "impossible", x: 53, y: 41 },
    objects: [
      target("moon", "moon pendant", 13, 80, { tags: ["metal", "round", "impossible", "pocket-sized"], hint: "glint" }),
      target("door", "tiny green door", 28, 65, { size: 8, tags: ["impossible", "green"], difficulty: "easy", hint: "rustle" }),
      target("coin", "coin growing like a flower", 53, 41, { size: 7, tags: ["money", "metal", "round", "number", "impossible"], difficulty: "easy", hint: "glint" }),
      target("bill", "banknote growing like a leaf", 88, 17, { size: 8, tags: ["money", "paper", "number", "impossible"], difficulty: "easy", hint: "lift" }),
      target("eye", "glass eye", 91, 80, { size: 7, tags: ["round", "impossible", "lost-object", "moved"], difficulty: "easy", hint: "shine" }),
      target("door-ring", "ring on the tiny door", 29, 72, { tags: ["metal", "round", "pocket-sized"], difficulty: "hard", hint: "glint" }),
      target("iris", "purple iris", 32, 19, { size: 7, tags: ["natural", "purple"], hint: "tremble" }),
      target("pink-petal", "pink petal", 40, 84, { size: 6, tags: ["natural", "pink", "moved"], difficulty: "hard", hint: "flutter" }),
      target("white-flower", "white clematis", 95, 17, { size: 7, tags: ["natural", "white", "round"], hint: "tremble" }),
      target("daisy", "small white daisy", 85, 73, { size: 6, tags: ["natural", "white", "round"], difficulty: "hard", hint: "tremble" })
    ],
    challenges: [
      challenge("impossible", "Find 3 impossible things.", ["door", "coin", "eye"]),
      challenge("odd-one", "What is looking back?", ["eye"]),
      challenge("money", "Find the money.", ["coin", "bill"]),
      challenge("round", "Find 4 round things.", ["moon", "coin", "eye", "door-ring"]),
      challenge("motion", "What moved?", ["eye"])
    ]
  }
];

export function chooseChallenge(scene, recentTypes = [], recentTargetSets = []) {
  const recentType = recentTypes.at(-1);
  const available = scene.challenges.filter((item) => {
    const key = [...item.targetIds].sort().join("|");
    return item.type !== recentType && !recentTargetSets.includes(key);
  });
  const pool = available.length ? available : scene.challenges.filter((item) => item.type !== recentType);
  const fallback = pool.length ? pool : scene.challenges;
  return fallback[Math.floor(Math.random() * fallback.length)];
}
