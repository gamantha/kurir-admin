import Helpers from '../../../helpers';

const helpers = new Helpers();

export const gets = async (auth) => {
  try {
    const result = await helpers.allInstance.get('api/user/', {
      headers: auth,
    });
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const test = () => {};
