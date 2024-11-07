"use client";

import { useContextSelector } from "use-context-selector";

import { TransactionsContext } from "@/contexts/TransactionsContext";

import { dateFormatter, priceFormatter } from "@/utils/formatter";

import styles from "./styles.module.scss";
import { EmptyState } from "../EmptyState";
import FeatherIcon from "feather-icons-react";

export function TableTransactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });
  const removeTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.removeTransaction;
    }
  );

  const isEmpty = transactions.length === 0;

  return isEmpty ? (
    <EmptyState />
  ) : (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.createdAt}>
            <td>{transaction.description}</td>
            <td className={styles[transaction.type]}>
              {priceFormatter.format(transaction.price)}
            </td>
            <td>{transaction.category}</td>
            <td>{dateFormatter(transaction.createdAt)}</td>
            <td>
              <button onClick={() => removeTransaction(transaction)}>
                <FeatherIcon icon="trash" size={16} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
