import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/eduardobvale/demo',
});

export default api;
  