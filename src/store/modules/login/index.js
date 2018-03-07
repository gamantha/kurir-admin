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
    commit(types.LOADING);
    commit(types.USER, result.data);
    commit(types.MESSAGE, result);
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
    let type = null;
    if (payload.meta.success) {
      const { data } = payload;
      const { accessToken } = data;
      const { role } = data.User;
      const sysadmin = role.toLowerCase() === ROLES.SYSADMIN;
      const siteadmin = role.toLowerCase() === ROLES.SITEADMIN;
      if (sysadmin || siteadmin) {
        VueCookie.set('token', accessToken);
        if (accessToken && sysadmin) {
          router.push('proposal');
        } else {
          router.push('shipping-details');
        }
        state.status = true;
        type = 'success';
        state.message = payload.meta.message;
      } else {
        state.status = false;
        type = 'error';
        state.message = 'unauthorized to access the page.';
      }
    } else {
      state.status = false;
      type = 'error';
      state.message = payload.meta.message;
    }
    ElementUI.Message({
      message: state.message,
      type,
    });
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
