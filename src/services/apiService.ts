import axios from "axios";

export const API_BASE_URL = "https://yuuikm.github.io/bc-api/db.json";

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export default apiService;
