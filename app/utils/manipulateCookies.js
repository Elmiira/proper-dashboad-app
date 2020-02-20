import cookie from 'react-cookies';
// TODO: Use webpack interceptors - localStorage instead of cookies

export function getToken() {
  return cookie.load('token');
}

export function deleteToken() {
  cookie.remove('token', { path: '/' }); 
}

export function setToken(token) {
  cookie.save('token', token, { path: '/' });
}
