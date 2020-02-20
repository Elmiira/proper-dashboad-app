import { LOGIN_USER, SET_TOKEN } from './actionsType';

export const loginUser = ({ username, password, requestId }) => ({
  type: LOGIN_USER,
  username,
  password,
  requestId,
});

export const setUserToken = token => ({
  type: SET_TOKEN,
  payload: {
    token,
  },
});
