import * as types from '../../../components/Login/mutation-types';

import { login } from './actions';

// const namespaced = true;

const initialState = {
  loading: false,
  message: null,
  form: {
    username: null,
    password: null,
  },
  user: null,
  status: null,
};

// getters
const getters = {
  loading: state => state.loading,
  message: state => state.message,
  form: state => state.form,
};

// actions
const actions = {
  async login({ commit }, payload) {
    // const result = await login(payload).then(res => res.data);
    // console.log(result);
    commit(types.LOADING);
    commit(types.MESSAGE, await login(payload));
    commit(types.FINISHED);
  },
  updateForm({ commit }, payload) {
    commit(types.UPDATE_FORM, payload);
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
  LOGIN(state, payload) {
    state.user = payload;
  },
  UPDATE_FORM(state, { field, value }) {
    Object.assign(state.form, {
      [field]: value,
    });
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
