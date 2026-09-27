const KEY = "money-meadow-seek-progress";

export function loadProgress() {
  try {
    return { pagesCompleted: 0, lastSceneId: null, ...JSON.parse(localStorage.getItem(KEY) || "{}") };
  } catch {
    return { pagesCompleted: 0, lastSceneId: null };
  }
}

export function saveProgress(progress) {
  try { localStorage.setItem(KEY, JSON.stringify(progress)); } catch { /* Play remains available without storage. */ }
}
