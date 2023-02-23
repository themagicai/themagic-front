// export const API = process.env.REACT_APP_API;

import axios from "axios";

export default axios.create({
    baseURL: "http://217.76.61.33/api/",
    headers: {
        "Content-type": "application/json",
    },
});
