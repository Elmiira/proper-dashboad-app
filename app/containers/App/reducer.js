import produce from 'immer';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  REQUEST_STATUS,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  requestType: '',
  requestState: '',
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.requestType = action.requestType;
        draft.requestState = REQUEST_STATUS.PENDING;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.loading = false;
        draft.requestState = REQUEST_STATUS.SUCCEED;
        break;

      case LOAD_REPOS_ERROR:
        draft.loading = false;
        draft.error = action.error;
        draft.requestState = REQUEST_STATUS.FAILED;
        break;
    }
  });

export default appReducer;
