import VueCookie from 'vue-cookie';
import ElementUI from 'element-ui';
import router from '../../../router';
import * as types from './mutation-types';

import { login } from './actions';
import { ROLES } from '../../../constants';

// const namespaced = true;

const initialState = {
  loading: false,
  message: null,
  user: null,
  status: null,
};

// getters
const getters = {
  loading: state => state.loading,
  message: state => state.message,
};

// actions
const actions = {
  async login({ commit }, payload) {
    const result = await login(payload);
    const msg = result.meta.message;
    commit(types.LOADING);
    commit(types.USER, result.data);
    commit(types.MESSAGE, result);
    if (result.meta.success) {
      ElementUI.Message({
        message: msg,
        type: 'success',
      });
    } else {
      ElementUI.Message({
        message: msg,
        type: 'error',
      });
    }
    commit(types.FINISHED);
  },
  async logout({ commit }) {
    commit(types.LOADING);
    commit(types.LOGOUT);
    commit(types.FINISHED);
  },
};

const mutations = {
  LOADING(state) {
    state.loading = true;
  },
  MESSAGE(state, payload) {
    if (payload.meta.success) {
      const { data } = payload;
      const { accessToken } = data;
      const { role } = data.User;
      if (role.toLowerCase() === ROLES.SYSADMIN) {
        VueCookie.set('token', accessToken);
        if (accessToken) router.push('proposal');
        state.status = true;
        state.message = payload.meta.message;
      } else {
        state.status = false;
        state.message = 'unauthorized to access the page.';
      }
    } else {
      state.status = false;
      state.message = payload.meta.message;
    }
  },
  FINISHED(state) {
    state.loading = false;
  },
  USER(state, payload) {
    state.user = payload;
  },
  LOGOUT(state) {
    VueCookie.delete('token');
    state.user = null;
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
