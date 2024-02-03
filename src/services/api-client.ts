import axios from "axios";

const apiKey = "cfc36a8e1bb142858e4a37849d0286d7";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});

export default apiClient;
