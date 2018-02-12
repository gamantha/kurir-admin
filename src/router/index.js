import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login/Login';
import ProposalList from '../components/ProposalList/ProposalList';
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
      path: '/proposal',
      name: 'ProposalList',
      component: ProposalList,
    },
    {
      path: '/user',
      name: 'UserList',
      component: UserList,
    },
  ],
});
