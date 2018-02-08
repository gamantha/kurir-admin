import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login/Login';
import UserList from '../components/UserList/UserList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/user-list',
      name: 'UserList',
      component: UserList,
    },
  ],
});
