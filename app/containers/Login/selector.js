export const getUserInfo = store =>
  store.login.get('userInfo') ? store.login.get('userInfo').toJS() : '';
  
export const getToken = store =>
  store.login.get('token') ? store.login.get('token') : false;