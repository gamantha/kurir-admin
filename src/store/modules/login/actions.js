import Helpers from '../../../helpers';

const helpers = new Helpers();

// router.beforeEach((to, from, next) => {
//   // const authRequired = to.name('Login');
//   if (store.state.loginState.status) {
//     next('/user-list');
//   } else {
//     next('/');
//   }
// });

export const login = async (payload) => {
  try {
    const result = await helpers.instance.post('api/user/login', payload);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const test = () => {};
