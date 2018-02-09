import Helpers from '../../../helpers';

const helpers = new Helpers();

export const gets = async () => {
  try {
    const result = await helpers.authInstance.get('api/user/proposal');
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const test = () => {};
