const KEY = "money-meadow-seek-progress";
const defaults = { pagesCompleted: 0, lastSceneId: null, seenInstructions: false };

export function loadProgress() {
  try {
    return { ...defaults, ...JSON.parse(localStorage.getItem(KEY) || "{}") };
  } catch {
    return { ...defaults };
  }
}

export function saveProgress(progress) {
  try {
    const current = loadProgress();
    localStorage.setItem(KEY, JSON.stringify({ ...current, ...progress }));
  } catch { /* Play remains available without storage. */ }
}
