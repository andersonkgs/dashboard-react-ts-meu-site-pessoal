import axios from "axios";
// const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: "https://json-server-meu-site-pessoal.onrender.com",
});

export default api;
