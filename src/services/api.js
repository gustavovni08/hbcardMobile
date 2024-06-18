import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.hbcard.com.br/'
});

export default api;