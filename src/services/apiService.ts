import axios from "axios";

export const API_BASE_URL = "https://yuuikm.github.io/abai-bc-api/db.json";

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export default apiService;
