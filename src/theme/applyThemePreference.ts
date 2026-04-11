import type { ThemePreference } from "./types";

/** Syncs DaisyUI: no attribute = follow OS (`dark` uses `--prefersdark`); explicit overrides. */
export function applyThemePreference(preference: ThemePreference) {
  const root = document.documentElement;
  if (preference === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", preference);
  }
}
