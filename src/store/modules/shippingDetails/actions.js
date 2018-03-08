import VueCookie from 'vue-cookie';
import instance from '../../../helpers/instance';

export const gets = async () => {
  try {
    const result = await instance.get('item', {
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
