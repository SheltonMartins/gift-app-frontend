import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://giftappapi.vercel.app", 
});

export default api;
