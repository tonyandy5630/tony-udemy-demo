import { useEffect } from "react";
import { ColorSchemePref, parseState, ResolvedScheme, stateKey, useStore } from "../utils";

export interface UseModeYield {
  mode: ColorSchemePref;
  systemMode: ResolvedScheme;
  setMode: (mode: ColorSchemePref) => void;
}

/**
 *
 *
 * @example
 * ```tsx
 * const [] = useMode(options);
 * ```
 *
 * @source - Source code
 */

export const useMode = (): UseModeYield => {
  const [{ mode, systemMode }, setThemeState] = useStore();

  const setMode = (mode: ColorSchemePref) => {
    setThemeState(state => ({ ...state, mode }));
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemColorScheme = () => {
      setThemeState(state => ({ ...state, systemMode: media.matches ? "dark" : "light" }));
    };

    updateSystemColorScheme();
    //* listen for changes in system color scheme
    media.addEventListener("change", updateSystemColorScheme);
    //* syncing state between tabs using local storage
    setThemeState(state => ({ ...state, ...parseState(localStorage.getItem(stateKey)) }));
    const storageListener = (e: StorageEvent) => {
      if (e.key === stateKey) {
        setThemeState(state => ({ ...state, ...parseState(e.newValue) }));
      }
    };
    addEventListener("storage", storageListener);

    return () => {
      media.removeEventListener("change", updateSystemColorScheme);
      removeEventListener("storage", storageListener);
    };
  }, []);

  return { mode, systemMode, setMode };
};
