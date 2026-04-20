/** Temporary override: force light theme regardless of preference/system setting. */
export function applyThemePreference() {
  const root = document.documentElement;
  root.dataset.theme = "light";
}
