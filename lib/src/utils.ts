import { useRGS } from "r18gs";

export type ColorSchemePref = "light" | "dark" | "system";
export type ResolvedScheme = "light" | "dark";

export interface Store {
  mode: ColorSchemePref;
  systemMode: ResolvedScheme;
}

const INIT_STORE: Store = {
  mode: "system",
  systemMode: "light",
};

export const stateKey = "theme-key-state";

export const parseState = (state: string | null) => {
  return state ? JSON.parse(state) : INIT_STORE;
};

export const useStore = () => useRGS<Store>("tony", INIT_STORE);
