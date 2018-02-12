import * as types from './mutation-types';

import { gets } from './actions';

const initialState = {
  userList: [],
};

// getters
const getters = {
  userList: state => state.userList,
};

// actions
const actions = {
  async getUser({ commit }, auth) {
    const result = await gets(auth);
    commit(types.GET_USER, result);
  },
};

const mutations = {
  GET_USER(state, payload) {
    if (payload.meta.success) {
      state.userList = payload.data;
    } else {
      state.userList = [];
    }
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
