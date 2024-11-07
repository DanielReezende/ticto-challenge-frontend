"use client";

import FeatherIcon from "feather-icons-react";
import styles from "./styles.module.scss";

export function EmptyState() {
  return (
    <div className={styles.container}>
      <div className={styles["icon-container"]}>
        <FeatherIcon icon="layers" size={32} />
      </div>

      <h1>Nenhum registro encontrado</h1>

      <p>
        Ainda não há transações registradas. Clique no botão de nova transação
        adicionar uma nova transação.
      </p>
    </div>
  );
}
