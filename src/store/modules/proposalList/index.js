import * as types from '../../../components/ProposalList/mutation-types';
import Helpers from '../../../helpers';

import { gets } from './actions';

const initialState = {
  proposals: [],
};

// getters
const getters = {
  proposals: state => state.proposals,
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
    if (payload.meta.success) {
      const encodedDate = [];
      payload.data.forEach((each) => {
        const propose = Helpers.decodeDate(each.proposeDate);
        const reject = Helpers.decodeDate(each.rejectDate);
        const accept = Helpers.decodeDate(each.acceptDate);
        const email = each.User.email;
        each.proposeDate = propose !== 'Invalid date' ? propose : null;
        each.rejectDate = reject !== 'Invalid date' ? reject : null;
        each.acceptDate = accept !== 'Invalid date' ? accept : null;
        each.User = email;
        encodedDate.push(each);
      });
      state.proposals = encodedDate;
    } else {
      state.proposals = [];
    }
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
