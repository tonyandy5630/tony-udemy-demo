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

export const useStore = () => useRGS<Store>("tony", INIT_STORE);