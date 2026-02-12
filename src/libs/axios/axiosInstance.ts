import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.dnd5eapi.co",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosInstance;
