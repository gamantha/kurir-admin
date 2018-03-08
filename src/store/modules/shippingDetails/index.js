import { gets } from './actions';
import types from './mutation-types';

const initialState = {
  items: [],
  selectedItem: [],
};

// getters
const getters = {
  items: state => state.items,
  getItemByTicketNumber: state => ticketNumber =>
    state.items.find(item => item.ticketNumber === ticketNumber),
  getSelectedItem: state => state.selectedItem,
};

// actions
const actions = {
  async getItems({ commit }) {
    const result = await gets();
    commit(types.GET_ITEMS, result);
  },
  storeSelectedItem({ commit }, payload) {
    commit(types.STORE_SELECTED_ITEM, payload);
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
  STORE_SELECTED_ITEM(state, payload) {
    state.selectedItem = payload;
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
