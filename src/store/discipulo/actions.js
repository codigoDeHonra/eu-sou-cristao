import * as types from './types';
import * as api from '@/api/discipulo';

export const insertDiscipuloAction = async ({ commit }, params) => {
  await api.insert(params)
    .then((response) => {
      const { data } = response;
      commit(types.INSERT_DISCIPULO, data);
    }).catch((e) => {
      // console.log(e)
      // throw new TypeError(e, 'error', 10);
    });
};

export const activeDiscipuloAction = async ({ commit }, params) => {
  await api.active(params)
    .then((response) => {
      const { data } = response;
      commit(types.ACTIVE_DISCIPULO, data);
    }).catch((e) => {
      // console.log(e)
      // throw new TypeError(e, 'error', 10);
    });
};

export const syncDiscipuloAction = async ({ commit }, params) => {
  await api.sync(params)
    .then((response) => {
      const { data } = response;
      commit(types.SYNC_DISCIPULO, data);
    }).catch((e) => {
      // console.log(e)
      // throw new TypeError(e, 'error', 10);
    });
};

export const syncDiscipulosAction = async ({ commit }) => {
  await api.syncDiscipulos()
    .then((response) => {
      const { data } = response;
      commit(types.SYNC_DISCIPULOS, data);
    }).catch((e) => {
      // console.log(e)
      // throw new TypeError(e, 'error', 10);
    });
};
