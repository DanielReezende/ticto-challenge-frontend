import * as RadioGroup from "@radix-ui/react-radio-group";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

import styles from "./styles.module.scss";
import FeatherIcon from "feather-icons-react";

interface ITypeTrasactionGroup<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
}

export function TypeTransactionGroup<T extends FieldValues>({
  control,
  name,
}: ITypeTrasactionGroup<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <RadioGroup.Root
            className={styles.container}
            onValueChange={field.onChange}
            value={field.value}
          >
            <RadioGroup.Item
              className={`${styles.item} ${styles.income}`}
              value="income"
            >
              <FeatherIcon icon="arrow-up-circle" size={24} />
              Entrada
            </RadioGroup.Item>
            <RadioGroup.Item
              className={`${styles.item} ${styles.outcome}`}
              value="outcome"
            >
              <FeatherIcon icon="arrow-down-circle" size={24} />
              Saída
            </RadioGroup.Item>
          </RadioGroup.Root>
        );
      }}
    />
  );
}
