import axios from 'axios';

export const key = "ba0c22f9f2b71760de99b6a2b7f5e48d18836cee";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`,
    }
})

export default api;

