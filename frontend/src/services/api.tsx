import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/deliveries',
});

export default api;
