import { THEME_STORAGE_KEY } from "./constants";
import type { ThemePreference } from "./types";

export function readStoredPreference(): ThemePreference {
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY);
    if (raw === "light" || raw === "dark" || raw === "system") return raw;
  } catch {
    /* private mode / denied */
  }
  return "system";
}
