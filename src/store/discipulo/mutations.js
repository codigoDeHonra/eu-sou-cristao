import * as types from './types';

export const state = {
  discipulo: {},
  discipulos: [],
};

export const mutations = {
  [types.SYNC_DISCIPULOS](state, params) {
    state.discipulos = params;
  },
  [types.SYNC_DISCIPULO](state, data) {
    state.discipulo = data;
  },
};
