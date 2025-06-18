import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { APP_CONFIG } from "@/shared/constants/app";

const STORAGE_KEY = APP_CONFIG.STORAGE_KEYS.LABELS;

export const localStorageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const result = next(action);

    // Сохраняем в localStorage после каждого изменения состояния labels
    if (action.type.startsWith("labels/")) {
      const state = store.getState();
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.labels.labels));
      } catch (error) {
        console.error("Failed to save to localStorage:", error);
      }
    }

    return result;
  };

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Failed to load from localStorage:", error);
    return [];
  }
};
