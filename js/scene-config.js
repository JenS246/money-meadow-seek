const target = (id, label, x, y, size = 5) => ({ id, label, x, y, width: size, height: size });

export const scenes = [
  {
    id: "cottage-garden", image: "./assets/scenes/cottage-garden.png", title: "The cottage garden",
    instruction: "Find five things someone left behind.", mobilePosition: "48% 50%",
    targets: [target("key", "brass key", 13, 82, 6), target("marble", "blue glass marble", 52, 78), target("bill", "folded five-dollar bill", 93, 14, 7), target("ribbon", "red ribbon", 73, 24, 7), target("coin", "silver coin", 31, 62)]
  },
  {
    id: "rain-meadow", image: "./assets/scenes/rain-meadow.png", title: "After the rain",
    instruction: "Find five things the rain uncovered.", mobilePosition: "52% 50%",
    targets: [target("stamp", "green postage stamp", 7, 17, 7), target("ring", "gold ring", 77, 26), target("boat", "paper boat", 52, 58, 7), target("button", "pearl button", 87, 80), target("coin", "copper coin", 14, 83, 6)]
  },
  {
    id: "stone-wall", image: "./assets/scenes/stone-wall.png", title: "The old wall",
    instruction: "Find five small things in the stones.", mobilePosition: "54% 50%",
    targets: [target("coin", "old coin", 20, 8), target("bill", "folded banknote", 46, 17, 7), target("thimble", "brass thimble", 61, 43), target("top", "red toy top", 50, 74, 6), target("feather", "white feather", 84, 73, 7)]
  },
  {
    id: "greenhouse", image: "./assets/scenes/greenhouse.png", title: "The glass house",
    instruction: "Find five objects the plants have claimed.", mobilePosition: "48% 50%",
    targets: [target("star", "porcelain star", 11, 9), target("watch", "pocket watch", 43, 54, 6), target("ribbon", "blue ribbon", 88, 17, 7), target("card", "playing card", 89, 84, 7), target("coin", "silver coin", 12, 77)]
  },
  {
    id: "woodland-edge", image: "./assets/scenes/woodland-edge.png", title: "Where the woods begin",
    instruction: "Find five things among the ferns.", mobilePosition: "49% 50%",
    targets: [target("compass", "brass compass", 12, 72, 7), target("coin", "silver coin", 48, 29), target("mitten", "red mitten", 46, 74, 6), target("bill", "folded ten-dollar bill", 70, 57, 8), target("bead", "blue glass bead", 87, 78)]
  },
  {
    id: "rose-path", image: "./assets/scenes/rose-path.png", title: "The rose path",
    instruction: "Find the five things that catch the twilight.", mobilePosition: "52% 50%",
    targets: [target("coin", "copper coin", 12, 11), target("tag", "numbered paper tag", 85, 17, 7), target("scissors", "brass scissors", 28, 61, 7), target("moon", "crescent brooch", 54, 86, 6), target("shell", "white shell", 91, 84, 7)]
  },
  {
    id: "summer-field", image: "./assets/scenes/summer-field.png", title: "Late summer",
    instruction: "Find five things resting in the tall grass.", mobilePosition: "52% 50%",
    targets: [target("bill", "folded banknote", 12, 18, 8), target("marble", "red glass marble", 19, 83), target("spoon", "silver spoon", 46, 80, 7), target("coin", "brass coin", 63, 58), target("feather", "blue feather", 93, 30, 7)]
  },
  {
    id: "secret-garden", image: "./assets/scenes/secret-garden.png", title: "The impossible garden",
    instruction: "Find five things that should not grow here.", mobilePosition: "51% 50%",
    targets: [target("moon", "moon pendant", 13, 80), target("door", "tiny green door", 28, 65, 8), target("coin", "coin growing like a flower", 53, 41, 7), target("bill", "banknote growing like a leaf", 88, 17, 8), target("eye", "glass eye", 91, 80, 7)]
  }
];
