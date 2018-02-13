import VueCookie from 'vue-cookie';
import Helpers from '../../../helpers';

const helpers = new Helpers();

export const gets = async () => {
  try {
    const result = await helpers.instance.get('api/user/proposal', {
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
    const result = await helpers.instance.put('api/user/update-propose', payload, {
      headers: {
        Authorization: `bearer ${VueCookie.get('token')}`,
      },
    });
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const createSiteAdmin = async (payload) => {
  try {
    const result = await helpers.instance.post('api/user/create', payload, {
      headers: {
        Authorization: `bearer ${VueCookie.get('token')}`,
      },
    });
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};
