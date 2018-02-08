import * as types from '../../../components/Login/mutation-types';

import { login } from './actions';

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
    commit(types.MESSAGE, result.meta);
    commit(types.FINISHED);
    commit(types.USER, result.data.User);
  },
};

const mutations = {
  LOADING(state) {
    state.loading = true;
  },
  MESSAGE(state, payload) {
    if (payload.success) {
      state.status = true;
    } else {
      state.status = false;
    }
    state.message = payload;
  },
  FINISHED(state) {
    state.loading = false;
  },
  USER(state, payload) {
    state.user = payload;
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};