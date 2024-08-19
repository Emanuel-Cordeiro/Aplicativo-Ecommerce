import axios from 'axios';

const config = {
  baseURL: 'https://dummyjson.com',
  headers: { 'Content-Type': 'application/json' },
};

export const api = axios.create(config);
