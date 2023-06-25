import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://auction.nader-mo.tech/"
  baseURL: "http://localhost:8003/"
});

// Add an interceptor to include the token in the headers of each request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
