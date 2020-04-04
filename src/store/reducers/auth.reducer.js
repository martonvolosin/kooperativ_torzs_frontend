import {
  AUTH_FETCH_START,
  AUTH_FETCH_SUCCESS,
  AUTH_FETCH_ERROR,
} from '../actions';

const INITIAL_STATE = {
  loading: false,
  error: null,
  uid: null,
  accessToken: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AUTH_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        ...action.payload,
      };
    case AUTH_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
