import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_REPOS_SUCCESS,
} from 'containers/App/constants';
import { loginService } from 'api/authServices';
import { LOGIN_USER, SET_TOKEN, SET_USER_DATA } from './actionsType';

function* loginSaga(action) {
  const { username, password } = action;
  yield put({ type: LOAD_REPOS, requestType: LOGIN_USER });
  try {
    const result = yield call(loginService, { username, password });
    if (result.status == 'ok') {
      const { token, username, avatar } = result.res;
      const userInfo = { avatar, username };
      yield put({ type: SET_TOKEN, payload: { token } });
      yield put({ type: SET_USER_DATA, userInfo });
      yield put({ type: LOAD_REPOS_SUCCESS });
    } else {
      yield put({ type: LOAD_REPOS_ERROR, error: 'Failed' });
    }
  } catch (err) {
    yield put({ type: LOAD_REPOS_ERROR, error: err });
  }
}

export default function* watchUserSagas() {
  yield takeLatest(LOGIN_USER, loginSaga);
}
