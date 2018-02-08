import helpers from '../../../helpers';

export const gets = async () => {
  try {
    const result = await helpers.authInstance.get('api/user/');
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const test = () => {};
