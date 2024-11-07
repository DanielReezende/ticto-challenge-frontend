"use client";

import { InputHTMLAttributes } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

import styles from "./styles.module.scss";

interface IInputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<T>;
  name: Path<T>;
  error?: string;
}

export function Input<T extends FieldValues>({
  control,
  name,
  error,
  ...rest
}: IInputProps<T>) {
  return (
    <div className={styles.container}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return <input {...rest} {...field} value={field?.value ?? ""} />;
        }}
      />
      {error && <span>{error}</span>}
    </div>
  );
}
