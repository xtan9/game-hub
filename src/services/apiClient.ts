import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "66ad2f31321a4ac48f7a80c4be1c66af",
  },
});

export default apiClient;
