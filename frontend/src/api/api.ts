import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Create core Axios interceptor which will be wrapped around everyrequest
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) [(config.headers.Authorization = `Bearer ${token}`)];
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
