import {
  AUTH_ERROR,
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  LOGOUT,
} from '../Type';

const initialState = {
  isLoading: false,
  accessToken: null,
  authenticated: null,
  user: null,
  error: null,
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {...state, isLoading: true};
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        accessToken: action.token,
        authenticated: action.isAuthenticated,
      };
    case AUTH_REGISTER:
      return {
        ...state,
        user: action.payload,
      };
    case AUTH_LOGIN:
      return {
        ...state,
        user: action.payload,
        accessToken: action.token,
        authenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        accessToken: null,
        authenticated: false,
      };
    case AUTH_ERROR:
      return {...state, isLoading: false, error: action.payload};
  }
  return state;
};

export default AuthReducer;
