import { BASE_URL } from "@/lib/apiurl";
import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`, // backend ka base url
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;