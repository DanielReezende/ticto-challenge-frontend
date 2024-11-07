"use client";
import FeatherIcon from "feather-icons-react";

import * as Dialog from "@radix-ui/react-dialog";

import { useModalController } from "./useModalController";

import { Input } from "../Form/Input";
import { Button } from "../Form/Button";

import styles from "./styles.module.scss";
import { TypeTransactionGroup } from "../Form/TypeTransactionGroup";
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "@/contexts/TransactionsContext";

export function Modal() {
  const handleToggleModal = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.handleToggleModal;
    }
  );

  const { control, handleSubmit, handleCreateNewTransaction, viewState } =
    useModalController();

  const { isSubmitting, errors } = viewState;

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay} />

      <Dialog.Content className={styles.content}>
        <Dialog.Title className={styles.title}>
          Cadastrar Transação
        </Dialog.Title>

        <Dialog.Close
          className={styles["close-button"]}
          onClick={handleToggleModal}
        >
          <FeatherIcon icon="x" size={28} />
        </Dialog.Close>

        <form
          className={styles.form}
          onSubmit={handleSubmit(handleCreateNewTransaction)}
        >
          <Input
            control={control}
            name="description"
            type="text"
            placeholder="Descrição"
            required
            error={errors.description && errors.description.message}
          />
          <Input
            control={control}
            name="price"
            type="number"
            placeholder="Preço"
            required
            error={errors.price && errors.price.message}
          />

          <TypeTransactionGroup control={control} name="type" />

          <Input
            control={control}
            name="category"
            type="text"
            placeholder="Categoria"
            required
            error={errors.category && errors.category.message}
          />

          <Button type="submit" disabled={isSubmitting}>
            Cadastrar
          </Button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
