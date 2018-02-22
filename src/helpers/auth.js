import VueCookie from 'vue-cookie';

export default (to, from, next) => {
  const token = VueCookie.get('token');
  if (token) {
    next();
  } else {
    next({ path: '/' });
  }
};
