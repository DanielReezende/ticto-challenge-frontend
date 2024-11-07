"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "@/contexts/TransactionsContext";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.string().refine((value) => Number(value)),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function useModalController() {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransaction;
    }
  );

  const handleToggleModal = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.handleToggleModal;
    }
  );

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      description: "",
      category: "",
      price: "",
      type: "income",
    },
  });

  function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    createTransaction(data);

    reset();

    handleToggleModal();
  }

  return {
    control,
    handleSubmit,
    handleCreateNewTransaction,

    viewState: {
      isSubmitting,
      errors,
    },
  };
}
