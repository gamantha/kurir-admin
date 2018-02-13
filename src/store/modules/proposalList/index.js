import ElementUI from 'element-ui';
import * as types from './mutation-types';
import ProposalService from './service';

import { gets, updateProposal } from './actions';

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
  async getProposal({ commit }) {
    const result = await gets();
    commit(types.GET_PROPOSAL, result);
  },
  async updateProposal({ commit }, payload) {
    const result = await updateProposal(payload);
    const getAgain = await gets();
    commit(types.UPDATE_PROPOSAL, result);
    const msg = `${payload.status}`;
    if (msg === 'verified') {
      ElementUI.Message({
        message: `User dengan ID ${payload.userId} berhasil diverifikasi. Role baru: sender+kurir`,
        type: 'success',
      });
    } else if (msg === 'rejected') {
      ElementUI.Message({
        message: `User dengan ID ${payload.userId} ditolak menjadi kurir.`,
        type: 'success',
      });
    } else {
      ElementUI.Message({
        message: `User dengan ID ${
          payload.userId
        } status proposalnya menjadi waiting. Role baru: sender`,
        type: 'success',
      });
    }
    commit(types.GET_PROPOSAL, getAgain);
  },
};

const mutations = {
  GET_PROPOSAL(state, payload) {
    if (payload.meta.success) {
      state.proposals = ProposalService.encodeDate(payload.data);
    } else {
      state.proposals = [];
    }
  },
  UPDATE_PROPOSAL(state, payload) {
    // const affectedRow = state.proposals.filter(each => each.UserId === payload.data.userId);
    // const affectedIdx = state.proposals.findIndex(each => each.UserId === payload.data.userId);
    if (payload.meta.success) {
      state.proposalMessage = payload.meta.message;
    } else {
      state.proposalMessage = payload.meta.message;
      ElementUI.Message(payload.meta.message);
    }
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
