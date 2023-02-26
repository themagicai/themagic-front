export const API = import.meta.env.MODE;
import axios from "axios";

export const instance = axios.create({
    baseURL: API,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
})