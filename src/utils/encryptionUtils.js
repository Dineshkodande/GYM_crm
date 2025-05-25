import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.REACT_APP_ENCRYPTION_KEY

export const encryptData = (data) => {
  try {
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      SECRET_KEY
    ).toString();
    return encrypted;
  } catch (error) {
    console.error("Encryption failed:", error);
    return null;
  }
};


export const decryptData = (encryptedData) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decrypted;
  } catch (error) {
    console.error("Decryption failed:", error);
    return null;
  }
};
