import { LocalStorageData } from "../enums/localStorage.enum";

export const clearAllLocalStorage = (): void => {
  sessionStorage.clear();
};

export const setTokenData = (data: string): void => {
  sessionStorage.setItem(LocalStorageData.token, data);
};

export const clearTokenData = (): void => {
  sessionStorage.removeItem(LocalStorageData.token);
};

export const getTokenData = (): string | null => {
  return sessionStorage.getItem(LocalStorageData.token);
};