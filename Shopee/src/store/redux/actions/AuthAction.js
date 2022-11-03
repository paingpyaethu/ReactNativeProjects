import {
  AUTH_ERROR,
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  LOGOUT,
} from '../Type';

export const fetch_auth_req = () => {
  return {
    type: AUTH_REQUEST,
  };
};
export const fetch_auth_success = (loadUser, accessToken, authenticated) => {
  return {
    type: AUTH_SUCCESS,
    payload: loadUser,
    token: accessToken,
    isAuthenticated: authenticated,
  };
};
export const fetch_auth_error = error => {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
};

export const fetch_auth_register = user => {
  return {
    type: AUTH_REGISTER,
    payload: user,
  };
};

export const fetch_auth_login = (user, accessToken) => {
  return {
    type: AUTH_LOGIN,
    payload: user,
    token: accessToken,
  };
};

export const fetch_auth_logout = () => {
  return {
    type: LOGOUT,
  };
};
