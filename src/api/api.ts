// export const API = process.env.REACT_APP_API;

import axios from "axios";

export const api = axios.create({
  baseURL: "https://628dc231a339dfef879fb371.mockapi.io",
});