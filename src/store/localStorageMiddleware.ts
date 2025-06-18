import type { RootState } from "./store";
import { APP_CONFIG } from "@/shared/constants/app";

const STORAGE_KEY = APP_CONFIG.STORAGE_KEYS.LABELS;

export const localStorageMiddleware =
  (store: any) => (next: any) => (action: any) => {
    const result = next(action);

    // Сохраняем в localStorage после каждого изменения состояния labels
    if (action.type && action.type.startsWith("labels/")) {
      const state = store.getState() as RootState;
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
