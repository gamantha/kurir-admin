import axios from 'axios';
import { baseUrl } from '../../../helpers/index';

const instance = axios.create({
  baseURL: baseUrl.dev,
});

export const login = async (payload) => {
  try {
    const result = await instance.post('api/user/login', payload);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const test = () => {};
