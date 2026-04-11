import { createContext } from "react";
import type { ResolvedTheme, ThemePreference } from "./types";

export type ThemeContextValue = {
  preference: ThemePreference;
  setPreference: (preference: ThemePreference) => void;
  resolvedTheme: ResolvedTheme;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);
