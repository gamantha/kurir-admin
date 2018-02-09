import * as types from './mutation-types';
import ProposalService from './service';

import { gets, updatePropose } from './actions';

const initialState = {
  proposals: [],
  proposalMessage: null,
};

// getters
const getters = {
  proposals: state => state.proposals,
  proposalMessage: state => state.proposalMessage,
};

// actions
const actions = {
  async gets({ commit }) {
    const result = await gets();
    commit(types.GETS, result);
  },
  async updatePropose({ commit }, payload) {
    const result = await updatePropose(payload);
    const getAgain = await gets();
    commit(types.UPDATE_PROPOSE, result);
    commit(types.GETS, getAgain);
  },
};

const mutations = {
  GETS(state, payload) {
    if (payload.meta.success) {
      state.proposals = ProposalService.encodeDate(payload.data);
    } else {
      state.proposals = [];
    }
  },
  UPDATE_PROPOSE(state, payload) {
    // const affectedRow = state.proposals.filter(each => each.UserId === payload.data.userId);
    // const affectedIdx = state.proposals.findIndex(each => each.UserId === payload.data.userId);
    if (payload.meta.success) {
      state.proposalMessage = payload.meta.message;
    } else {
      state.proposalMessage = payload.meta.message;
    }
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
