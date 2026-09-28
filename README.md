# Money Meadow Seek

A small browser-based seek-and-find game presented as a tactile illustrated book. Each page contains a distinct, richly detailed meadow with a changing observation challenge.

## How it works

- Eight scene artworks, 77 discoverable details, and 44 curated challenge variations are configured in `js/scene-config.js`.
- A clothbound cover and short first-visit instruction spread lead into the puzzles. Returning players go directly to their next spread, while in-book controls keep the cover and instructions available.
- Each visit selects a challenge containing one to five objects, follows a varied difficulty rhythm, and avoids recently used scenes, challenge types, and target sets.
- Every known object remains interactive: active targets receive varied hand-drawn circles and pencil checks, known non-targets briefly receive a soft pencil X without advancing progress, and empty space gives only a subtle environmental disturbance.
- Hotspots scale with each scene and support mouse, touch, keyboard, and screen-reader labels.
- A subtle hint becomes available after 20 seconds without a find.
- An optional physical magnifying glass follows the pointer on desktop, supports keyboard positioning, and appears with a press-and-hold gesture on touch screens. It magnifies the artwork, ambient cues, and persistent found marks together.
- Desktop uses a restrained two-page spread with layered page edges, a curved gutter, and four intentional illustration-margin treatments; smaller screens collapse to one continuous page.
- Completed scenes reveal both an accessible text control and a physical corner lift. The old sheet folds from the lower-right edge while a moving shadow uncovers the preloaded next meadow.
- Every meadow has its own rare signature ambient event.
- Page completions are stored locally in the browser. There is no account or backend.
- Sound is optional and synthesized in-browser, including quiet page, pencil, and object-specific cues, so there are no audio downloads.
- Motion respects `prefers-reduced-motion`. The warm light palette is intentionally fixed to preserve the printed-paper illusion.

## Run locally

Serve the repository with any static server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Deploy

The project uses relative paths and is ready for GitHub Pages at:

`https://jens246.github.io/money-meadow-seek/`

The included GitHub Actions workflow publishes the repository root whenever `main` is pushed. In the GitHub repository settings, set Pages source to **GitHub Actions** if it is not selected automatically.

## Project structure

- `index.html`: book and game shell
- `css/styles.css`: responsive book layout, scene states, and motion
- `js/scene-config.js`: scene content and hotspot coordinates
- `js/scene-manager.js`: game state and page flow
- `js/book-flow.js`: cover, first-run instructions, and in-book navigation
- `js/magnifier.js`: desktop, keyboard, and touch magnifier behavior
- `js/hints.js`: delayed hint behavior
- `js/ambient-events.js`: environmental hints, found feedback, and scene-specific ambient events
- `js/audio.js`: optional minimal sound
- `js/storage.js`: local progress persistence
- `assets/scenes/`: the eight independent scene artworks

## Asset note

The scene artworks were generated specifically for this project. The existing `money-meadow-animation` and `money-meadow-v2` repositories were not modified or referenced at runtime.
