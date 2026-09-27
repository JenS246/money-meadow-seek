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
      challenge("pocket", "Find three things that fit in a pocket.", ["key", "marble", "coin"]),
      challenge("duplicate", "Two birds are visiting. Find both.", ["robin", "birdbath-bird"]),
      challenge("red", "One red thing is caught in a branch. Find it.", ["ribbon"]),
      challenge("metal", "Find three things made of metal.", ["key", "coin", "watering-can"])
    ]
  },
  {
    id: "rain-meadow", image: "./assets/scenes/rain-meadow.png", title: "After the rain",
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
      challenge("round", "Find three things that are round.", ["ring", "button", "coin"]),
      challenge("paper", "Find two things made of paper.", ["stamp", "boat"]),
      challenge("metal", "Find two things made of metal.", ["ring", "coin"]),
      challenge("motion", "Find the drop that moved.", ["dew-drop"]),
      challenge("pocket", "Find four things that fit in a pocket.", ["stamp", "ring", "button", "coin"])
    ]
  },
  {
    id: "stone-wall", image: "./assets/scenes/stone-wall.png", title: "The old wall",
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
      challenge("money", "Find the money hidden in the wall.", ["coin", "bill"]),
      challenge("metal", "Find two small things made of metal.", ["coin", "thimble"]),
      challenge("number", "Find two things with numbers.", ["coin", "bill"]),
      challenge("lost", "Find five things someone dropped.", ["coin", "bill", "thimble", "top", "feather"]),
      challenge("motion", "Find the thing that stirred.", ["feather"])
    ]
  },
  {
    id: "greenhouse", image: "./assets/scenes/greenhouse.png", title: "The glass house",
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
      challenge("number", "Find three things with numbers.", ["watch", "card", "coin"]),
      challenge("metal", "Find four things made of metal.", ["watch", "coin", "watering-can", "chair"]),
      challenge("lost", "Find five objects the plants have claimed.", ["star", "watch", "ribbon", "card", "coin"]),
      challenge("paper", "Find two things made of paper.", ["card", "books"]),
      challenge("motion", "Find the thing that moved.", ["ribbon"]),
      challenge("not-touching", "Find the only thing not touching a plant.", ["bird"])
    ]
  },
  {
    id: "woodland-edge", image: "./assets/scenes/woodland-edge.png", title: "Where the woods begin",
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
      challenge("money", "Find the money among the ferns.", ["coin", "bill"]),
      challenge("round", "Find three things that are round.", ["compass", "coin", "bead"]),
      challenge("pocket", "Find four things that fit in a pocket.", ["compass", "coin", "mitten", "bead"]),
      challenge("lost", "Find five things left in the woods.", ["compass", "coin", "mitten", "bill", "bead"]),
      challenge("motion", "Find the thing that fluttered.", ["butterfly"])
    ]
  },
  {
    id: "rose-path", image: "./assets/scenes/rose-path.png", title: "The rose path",
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
      challenge("number", "Find two things with numbers.", ["coin", "tag"]),
      challenge("metal", "Find three things made of metal.", ["coin", "scissors", "moon"]),
      challenge("lost", "Find four things someone left behind.", ["tag", "scissors", "moon", "shell"]),
      challenge("duplicate", "Two tiny lights match. Find both.", ["firefly-left", "firefly-right"]),
      challenge("motion", "Find the petal that fell.", ["fallen-petal"]),
      challenge("other-page", "Which object belongs on another page?", ["shell"])
    ]
  },
  {
    id: "summer-field", image: "./assets/scenes/summer-field.png", title: "Late summer",
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
      challenge("money", "Find the money in the tall grass.", ["bill", "coin"]),
      challenge("round", "Find three things that are round.", ["marble", "coin", "apple"]),
      challenge("metal", "Find two things made of metal.", ["spoon", "coin"]),
      challenge("pocket", "Find four things that fit in a pocket.", ["marble", "spoon", "coin", "feather"]),
      challenge("motion", "Find the thing that stirred.", ["feather"]),
      challenge("red", "Find two red things near the foreground.", ["marble", "poppy-left"]),
      challenge("smallest-money", "Find the smallest piece of money.", ["coin"])
    ]
  },
  {
    id: "secret-garden", image: "./assets/scenes/secret-garden.png", title: "The impossible garden",
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
      challenge("impossible", "Find three impossible things.", ["door", "coin", "eye"]),
      challenge("odd-one", "One thing is looking back. Find it.", ["eye"]),
      challenge("money", "Find the money growing in the garden.", ["coin", "bill"]),
      challenge("round", "Find four things that are round.", ["moon", "coin", "eye", "door-ring"]),
      challenge("motion", "Find the strange thing that moved.", ["eye"])
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
