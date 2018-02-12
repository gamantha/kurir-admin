import VueCookie from 'vue-cookie';
import Helpers from '../../../helpers';

const helpers = new Helpers();

export const getInit = async (auth) => {
  try {
    const result = await helpers.allInstance.get('api/user/proposal', {
      headers: auth,
    });
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const gets = async () => {
  try {
    const result = await helpers.authInstance.get('api/user/proposal', {
      headers: {
        Authorization: `bearer ${VueCookie.get('token')}`,
      },
    });
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateProposal = async (payload) => {
  try {
    const result = await helpers.authInstance.put('api/user/update-propose', payload, {
      headers: {
        Authorization: `bearer ${VueCookie.get('token')}`,
      },
    });
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};
