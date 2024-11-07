"use client";

import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import styles from "./styles.module.scss";

export function Button({
  children,
  ...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button className={styles.container} {...rest}>
      {children}
    </button>
  );
}
