import ElementUI from 'element-ui';
import * as types from './mutation-types';
import ProposalService from './service';

import { gets, createSiteAdmin, updateProposal } from './actions';

const initialState = {
  proposals: [],
  proposalMessage: null,
  siteAdminMsg: null,
};

// getters
const getters = {
  proposals: state => state.proposals,
  proposalMessage: state => state.proposalMessage,
  siteAdminMsg: state => state.siteAdminMsg,
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
        message: `User dengan ID ${payload.UserId} berhasil diverifikasi. Role baru: sender+kurir`,
        type: 'success',
      });
    } else if (msg === 'rejected') {
      ElementUI.Message({
        message: `User dengan ID ${payload.UserId} ditolak menjadi kurir.`,
        type: 'success',
      });
    } else {
      ElementUI.Message({
        message: `User dengan ID ${
          payload.UserId
        } status proposalnya menjadi waiting. Role baru: sender`,
        type: 'success',
      });
    }
    commit(types.GET_PROPOSAL, getAgain);
  },
  async createSiteAdmin({ commit }, payload) {
    const result = await createSiteAdmin(payload);
    commit(types.CREATE_SITE_ADMIN, result);
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
      ElementUI.Message({
        message: `${payload.meta.message}`,
        type: 'error',
      });
    }
  },
  CREATE_SITE_ADMIN(state, payload) {
    if (payload.meta.success) {
      state.siteAdminMsg = payload.meta.message;
      ElementUI.Message({
        message: `${payload.meta.message}`,
        type: 'success',
      });
    } else {
      state.siteAdminMsg = payload.meta.message;
      ElementUI.Message({
        message: `${payload.meta.message}`,
        type: 'error',
      });
    }
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
