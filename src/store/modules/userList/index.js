import * as types from '../../../components/UserList/mutation-types';

import { gets } from './actions';

const initialState = {
  users: [],
};

// getters
const getters = {
  users: state => state.users,
};

// actions
const actions = {
  async gets({ commit }, payload) {
    const result = await gets(payload);
    commit(types.GETS, result);
  },
};

const mutations = {
  GETS(state, payload) {
    if (payload.success) {
      state.users = payload;
    } else {
      state.users = [];
    }
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
