import { HTMLProps, ReactNode } from "react";
import styles from "./core.module.scss";

export interface CoreProps extends HTMLProps<HTMLDivElement> {
  themeTransition?: boolean;
}

/**
 *
 *
 * @example
 * ```tsx
 * <Core />
 * ```
 *
 * @source - Source code
 */
export const Core = ({ themeTransition }: CoreProps) => {
  return <></>;
};
