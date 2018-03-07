import { gets } from './actions';
import types from './mutation-types';

const initialState = {
  items: [],
};

// getters
const getters = {
  items: state => state.items,
  getItemByTicketNumber: state => ticketNumber =>
    state.items.find(item => item.ticketNumber === ticketNumber),
};

// actions
const actions = {
  async getItems({ commit }) {
    const result = await gets();
    commit(types.GET_ITEMS, result);
  },
};

const mutations = {
  GET_ITEMS(state, payload) {
    if (payload.meta.success) {
      state.items = payload.data;
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
