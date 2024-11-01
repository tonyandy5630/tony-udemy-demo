import { ColorSchemePref, ResolvedScheme, useStore } from "../utils";

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
  const [{ mode, systemMode }, setState] = useStore();

  const setMode = (mode: ColorSchemePref) => {
    setState(state => ({ ...state, mode }));
  };

  return { mode, systemMode, setMode };
};
