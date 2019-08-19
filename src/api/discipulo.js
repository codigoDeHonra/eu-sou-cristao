import * as http from './http';


export const insert = function (params) {
  return http.postRequest('/discipulo', params);
};

export const sync = function (params) {
  return http.getRequest('/discipulo/'+ params);
};

export const syncDiscipulos = function () {
  return http.getRequest('/discipulo');
};
