import { fromJS } from 'immutable';

import { setToken, deleteToken } from 'utils/manipulateCookies';
import { SET_TOKEN, SET_USER_DATA } from './actionsType';

const initialState = fromJS({
  userInfo: undefined,
  token: undefined,
});

export default function login(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return setUserInfo(state, action);
    case SET_TOKEN:
      return setUserToken(state, action);
    default:
      return state;
  }
}

function setUserInfo(prevState, action) {
  const { userInfo } = action;
  return prevState.set('userInfo', fromJS(userInfo));
}

function setUserToken(prevState, action) {
  const { token } = action.payload;
  if (token) {
    setToken(token);
    return prevState.set('token', fromJS(token));
  }
  deleteToken();
  return prevState.set('token', undefined);
}
