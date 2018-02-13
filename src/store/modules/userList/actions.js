import VueCookie from 'vue-cookie';
import Helpers from '../../../helpers';

const helpers = new Helpers();

export const gets = async () => {
  try {
    const result = await helpers.instance.get('api/user/', {
      headers: {
        Authorization: `bearer ${VueCookie.get('token')}`,
      },
    });
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const test = () => {};
