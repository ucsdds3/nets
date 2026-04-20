import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { applyThemePreference } from "./applyThemePreference";
import { THEME_STORAGE_KEY } from "./constants";
import { readStoredPreference } from "./readStoredPreference";
import { ThemeContext } from "./themeContext";
import type { ResolvedTheme, ThemePreference } from "./types";

function mediaPrefersDark() {
  return globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeProvider({ children }: { readonly children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>(() =>
    readStoredPreference()
  );
  const [systemDark, setSystemDark] = useState(mediaPrefersDark);

  const setPreference = useCallback((next: ThemePreference) => {
    setPreferenceState(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    applyThemePreference();
  }, []);

  useEffect(() => {
    applyThemePreference();
  }, [preference]);

  useEffect(() => {
    const mq = globalThis.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setSystemDark(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== THEME_STORAGE_KEY || e.storageArea !== localStorage) return;
      let next: ThemePreference = "system";
      if (e.newValue === "light" || e.newValue === "dark" || e.newValue === "system") {
        next = e.newValue;
      }
      setPreferenceState(next);
      applyThemePreference();
    };
    globalThis.addEventListener("storage", onStorage);
    return () => globalThis.removeEventListener("storage", onStorage);
  }, []);

  let resolvedTheme: ResolvedTheme;
  if (preference === "system") {
    resolvedTheme = systemDark ? "dark" : "light";
  } else {
    resolvedTheme = preference;
  }

  const value = useMemo(
    () => ({ preference, setPreference, resolvedTheme }),
    [preference, setPreference, resolvedTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
