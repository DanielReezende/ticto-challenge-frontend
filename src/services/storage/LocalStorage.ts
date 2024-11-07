"use client";

import { StorageService } from "./index";

export const localStorage: StorageService = {
  getItem: (key) => {
    const item = window?.localStorage.getItem(key);

    if (item) {
      return JSON.parse(item);
    }
    return null;
  },
  setItem: (key, value) => {
    window?.localStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: (key) => {
    window?.localStorage.removeItem(key);
  },
};
