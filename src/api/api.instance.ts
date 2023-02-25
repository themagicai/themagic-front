import axios from "axios";

const instance = axios.create({
    baseURL: 'http://api.themagicai.com/api/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
})