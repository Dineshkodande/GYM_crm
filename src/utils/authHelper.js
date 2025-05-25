import { STORAGE_USER } from "../constants/storageConstants";
import { decryptData } from "./encryptionUtils";

let authInstance = null;
export const setAuthInstance = (auth) => {
  authInstance = auth;
};

export const getAuthToken = () => {
  return authInstance.getTokens();
};

export const getUser = () => {
  const encryptedData = localStorage.getItem(STORAGE_USER);
  const user = decryptData(encryptedData);
  return user
};
