import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import loginState from './modules/login';
import userState from './modules/userList';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    loginState,
    userState,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
