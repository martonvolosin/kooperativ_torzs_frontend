import Client from '../../api/Client';

// Types
export const AUTH_FETCH_START = 'AUTH_FETCH_START';
export const AUTH_FETCH_SUCCESS = 'AUTH_FETCH_SUCCESS';
export const AUTH_FETCH_ERROR = 'AUTH_FETCH_ERROR';

// Local action creators
const authFetchStart = () => ({
  type: AUTH_FETCH_START,
});

const authFetchSuccess = payload => ({
  type: AUTH_FETCH_SUCCESS,
  payload,
});

const authFetchError = error => ({
  type: AUTH_FETCH_ERROR,
  error,
});

// Public action creators
export const register = (email, password) => async dispatch => {
  dispatch(authFetchStart());
  try {
    const res = await Client.register(email, password);
    dispatch(authFetchSuccess(res.user.uid));
  } catch (error) {
    dispatch(authFetchError(error.message));
  }
};

export const login = (email, password) => async dispatch => {
  dispatch(authFetchStart());
  try {
    const res = await Client.login(email, password);
    dispatch(authFetchSuccess({ uid: res.user.uid, accessToken: res.user.xa }));
  } catch (error) {
    dispatch(authFetchError(error.message));
  }
};
