"use client";
import FeatherIcon, { FeatherIconProps } from "feather-icons-react";

import { priceFormatter } from "@/utils/formatter";

import styles from "./styles.module.scss";

type ISumaryCardProps = {
  variant?: "primary" | "secondary" | "tertiary";
  title: string;
  iconProps?: FeatherIconProps;
  value: number;
};

export function SumaryCard({
  variant = "primary",
  title,
  iconProps,
  value,
}: ISumaryCardProps) {
  return (
    <div className={`${styles.container} ${styles[variant]}`}>
      <header>
        <span>{title}</span>
        {iconProps && <FeatherIcon {...iconProps} size={32} />}
      </header>

      <strong>{priceFormatter.format(value)}</strong>
    </div>
  );
}
