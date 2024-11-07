"use client";

import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "@/contexts/TransactionsContext";

import { Card } from "../Card";
import { EmptyState } from "../EmptyState";

import styles from "./styles.module.scss";

export function ListTransactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  const isEmpty = transactions.length === 0;

  return isEmpty ? (
    <EmptyState />
  ) : (
    <ul className={styles['list-container']}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <Card data={transaction} />
        </li>
      ))}
    </ul>
  );
}
