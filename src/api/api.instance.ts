export const API = process.env.REACT_APP_API;
import axios from "axios";

export const instance = axios.create({
    baseURL: API,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
})