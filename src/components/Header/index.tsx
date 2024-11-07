import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

import { Button } from "../Form/Button";
import { Modal } from "../Modal";

import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "@/contexts/TransactionsContext";

import styles from "./styles.module.scss";

export function Header() {
  const isModalTransactionOpen = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.isModalTransactionOpen;
    }
  );

  const handleToggleModal = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.handleToggleModal;
    }
  );

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles['image-container']}>
          <Image
            src="/logo.svg"
            alt="TicTacToe Challenge"
            width={186}
            height={36}
            layout="responsive"
            />
        </div>

        <Dialog.Root open={isModalTransactionOpen}>
          <Button onClick={handleToggleModal}>Nova Transação</Button>

          <Modal />
        </Dialog.Root>
      </div>
    </header>
  );
}
