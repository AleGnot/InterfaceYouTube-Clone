import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-prisma-api.vercel.app",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export default api;
