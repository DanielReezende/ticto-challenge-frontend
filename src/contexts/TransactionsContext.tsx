"use client";
import { ReactNode, useCallback, useState } from "react";
import { createContext } from "use-context-selector";

import { dbKey } from "@/constants/key";
import { ListTransactionModel, Transaction } from "@/models/transaction.model";
import { storageService } from "@/services/storage";

interface CreateTransactionInput {
  description: string;
  price: string;
  category: string;
  type: "income" | "outcome";
}

interface TransactionContextType {
  isModalTransactionOpen: boolean;
  handleToggleModal: () => void;
  transactions: Transaction[];
  createTransaction: (data: CreateTransactionInput) => void;
  removeTransaction: (data: Transaction) => void;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [isModalTransactionOpen, setIsModalTransactionOpen] = useState(false);
  const [transactions, setTransaction] = useState<Transaction[]>(() => {
    if (typeof window !== "undefined") {
      const storedTransactions =
        storageService.getItem<ListTransactionModel>(dbKey)?.transactions;

      return storedTransactions ?? [];
    }

    return [];
  });

  function handleToggleModal() {
    setIsModalTransactionOpen((prevState) => !prevState);
  }

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, category, type } = data;

      const newTransaction = {
        id: new Date().getTime(),
        description,
        type,
        price: Number(price),
        category,
        createdAt: new Date().toISOString(),
      };

      storageService.setItem<ListTransactionModel>(dbKey, {
        transactions: [...transactions, newTransaction],
      });

      setTransaction((prevState) => [...prevState, newTransaction]);
    },

    [transactions]
  );

  const removeTransaction = useCallback(
    async (data: Transaction) => {
      const filteredTransactions = transactions.filter(
        (transaction) => transaction.id !== data.id
      );

      storageService.setItem<ListTransactionModel>(dbKey, {
        transactions: filteredTransactions,
      });

      setTransaction(filteredTransactions);
    },

    [transactions]
  );

  return (
    <TransactionsContext.Provider
      value={{
        isModalTransactionOpen,
        transactions,
        createTransaction,
        removeTransaction,
        handleToggleModal,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
