"use client";

import { useSummary } from "@/hooks/useSummary";
import { SumaryCard } from "./Card";
import styles from "./styles.module.scss";

export function Sumary() {
  const summary = useSummary();

  return (
    <div className={styles["scroll-container"]}>
      <section className={styles.container}>
        <SumaryCard
          title="Entradas"
          iconProps={{
            icon: "arrow-down-left",
            className: styles.green,
          }}
          value={summary.income}
        />
        <SumaryCard
          title="Saídas"
          iconProps={{
            icon: "arrow-up-right",
            className: styles.red,
          }}
          value={summary.outcome}
        />
        <SumaryCard
          variant={summary.total >= 0 ? "secondary" : "tertiary"}
          title="Saldo Total"
          value={summary.total}
        />
      </section>
    </div>
  );
}
