import axios from "axios";
import { getUser } from "../utils/authHelper";

export const BASE_URL =
  process.env.NODE_ENV === "development" ? "" : process.env.REACT_APP_APP_URL;

const authAxios = axios.create();
authAxios.interceptors.request.use(
  async (config) => {
    const token = await getUser();
    if (token) {
      config.headers["Authorization"] = `${token.jwtToken}`;
      config.headers["x-api-key"] = `${process.env.REACT_APP_X_API_KEY}`;
      config.headers["Content-Type"] = "application/json";
    }
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default authAxios;
