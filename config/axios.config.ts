import axios from "axios";

export const http = axios.create({
    withCredentials: true,
    baseURL: process.env.EXPO_PUBLIC_API_URL
})

export const setAuthToken = (token: string | null) => {
    if (token !== null) {
        http.defaults.headers.common["Authorization"] = `${token}`;
    } else {
        delete http.defaults.headers.common["Authorization"]
    }
}