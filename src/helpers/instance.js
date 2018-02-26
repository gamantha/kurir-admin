import axios from 'axios';
import { BASE_API_URL } from '../constants';
import app from '../main';

const instance = axios.create({
  baseURL: BASE_API_URL,
  validateStatus(status) {
    return status < 500;
  },
});

instance.interceptors.request.use((config) => {
  app.$Progress.start(); // for every request start the progress
  return config;
});

instance.interceptors.response.use((response) => {
  app.$Progress.finish(); // finish when a response is received
  return response;
});

export default instance;
