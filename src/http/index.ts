import axios, { AxiosRequestConfig } from "axios";
import { URL } from "../utils/config";

const $api = axios.create({
  withCredentials: true,
  baseURL: URL,
});

$api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config?.headers) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`
      );
    }
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (err) => {
    throw new Error(err);
  }
);

export default $api;