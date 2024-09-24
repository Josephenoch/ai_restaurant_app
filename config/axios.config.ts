import axios from "axios";

export const http = axios.create({
    withCredentials: true,
    baseURL: process.env.EXPO_PUBLIC_API_URL
  })