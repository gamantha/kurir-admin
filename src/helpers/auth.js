import VueCookie from 'vue-cookie';
import Helper from '../helpers';

export const sysAdminCheck = (to, from, next) => {
  const token = VueCookie.get('token');
  const userRole = Helper.parseToken(token).role;
  if (token && userRole === 'sysadmin') {
    next();
  } else {
    next({ path: '/unauthorized' });
  }
};

export const siteAdminCheck = (to, from, next) => {
  const token = VueCookie.get('token');
  const userRole = Helper.parseToken(token).role;
  if (token && userRole === 'siteadmin') {
    next();
  } else {
    next({ path: '/unauthorized' });
  }
};

export const bothAdmin = (to, from, next) => {
  const token = VueCookie.get('token');
  const userRole = Helper.parseToken(token).role;
  if (token && userRole === 'siteadmin') {
    next();
  } else if (token && userRole === 'sysadmin') {
    next();
  } else {
    next({ path: '/unauthorized' });
  }
};
