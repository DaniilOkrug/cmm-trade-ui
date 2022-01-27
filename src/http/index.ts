import axios, { AxiosRequestConfig } from "axios";

export const API_URL = `http://localhost:5000/api`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config?.headers) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`
      );
    }
    config.headers["Authorisation"] = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (err) => {
    throw new Error(err);
  }
);

export default $api;