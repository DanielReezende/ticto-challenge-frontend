"use client";

import FeatherIcon from "feather-icons-react";

import { Transaction } from "@/models/transaction.model";

import { dateFormatter, priceFormatter } from "@/utils/formatter";

import styles from "./styles.module.scss";

type ICardProps = {
  data: Transaction;
};

export function Card({ data }: ICardProps) {
  return (
    <div className={styles.container}>
      <header>
        <span>{data.description}</span>

        <strong className={styles[data.type]}>
          {priceFormatter.format(data.price)}
        </strong>
      </header>

      <footer>
        <div>
          <FeatherIcon icon="flag" size={16} />

          <span>{data.category}</span>
        </div>

        <span>{dateFormatter(data.createdAt)}</span>
      </footer>
    </div>
  );
}
