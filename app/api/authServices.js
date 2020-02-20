import request from 'utils/request';
import { AUTH_USER_API } from './apiAddresses';

export function loginService({ username, password }) {
  return request({
    method: 'POST',
    url: AUTH_USER_API,
    data: {
      username,
      password,
    },
  });
}
