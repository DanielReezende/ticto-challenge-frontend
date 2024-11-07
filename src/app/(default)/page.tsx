"use client";

import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Sumary } from "@/components/Sumary";

import { TransactionsContext } from "@/contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

import styles from "./styles.module.scss";
import { useHomeController } from "./useHomeController";
import { dateFormatter, priceFormatter } from "@/utils/formatter";
import { TableTransactions } from "@/components/TableTransactions";
import { ListTransactions } from "@/components/ListTransactions";

export default function Home() {
  const { viewState } = useHomeController();
  const { isDesktop } = viewState;

  return (
    <main>
      <Header />
      <Sumary />

      <section className={styles["transactions-section"]}>
        {isDesktop ? <TableTransactions /> : <ListTransactions />}
      </section>
    </main>
  );
}
