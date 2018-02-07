import axios from 'axios';
import { baseUrl } from '../../../helpers/index';

const instance = axios.create({
  baseURL: baseUrl.dev,
});

export const login = async (payload) => {
  try {
    // eslint-disable-next-line
    console.log(payload);
    const message = await instance.post('api/user/login', payload);
    return message.data.meta;
  } catch (error) {
    return error.response.data.meta;
  }
};
