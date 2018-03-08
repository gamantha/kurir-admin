import instance from '../../../helpers/instance';

export const login = async (payload) => {
  try {
    const result = await instance.post('user/login', payload);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const test = () => {};
