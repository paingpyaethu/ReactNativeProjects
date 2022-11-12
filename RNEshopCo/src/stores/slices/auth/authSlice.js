import {createSlice} from '@reduxjs/toolkit';
import * as Keychain from 'react-native-keychain';
import Toast from 'react-native-toast-message';
import axios from 'axios';

import {METRICS} from '../../../themes';
import {BASE_URL} from '../../api_endpoint';

const initialState = {
  isLoading: false,
  accessToken: null,
  authenticated: null,
  authUsers: null,
  error: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    fetch_auth_request: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    fetch_auth_success: (state, action) => {
      return {
        ...state,
        isLoading: false,
        accessToken: action.payload.token,
        authenticated: action.payload.authenticated,
        authUsers: action.payload.info,
      };
    },
    fetch_auth_register: (state, action) => {
      const data = action.payload.data;
      const token = action.payload._token;
      return {
        ...state,
        isLoading: false,
        accessToken: token,
        authenticated: true,
        authUsers: data,
      };
    },
    fetch_auth_login: (state, action) => {
      const data = action.payload.data;
      const token = action.payload._token;
      return {
        ...state,
        isLoading: false,
        accessToken: token,
        authenticated: true,
        authUsers: data,
      };
    },
    fetch_auth_logout: state => {
      return {
        ...state,
        isLoading: false,
        accessToken: null,
        authenticated: null,
        authUsers: null,
      };
    },
    fetch_auth_error: (state, action) => {
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        error: action.payload,
      };
    },
  },
});

const {
  fetch_auth_request,
  fetch_auth_success,
  fetch_auth_register,
  fetch_auth_login,
  fetch_auth_logout,
  fetch_auth_error,
} = authSlice.actions;

export const loadJWT = () => {
  return async dispatch => {
    try {
      const credentials = await Keychain.getGenericPassword();

      if (!credentials) {
        return;
      }
      const jwt = JSON.parse(credentials.password);

      console.log('Keychain Password::: ', jwt);

      dispatch(fetch_auth_success(jwt));
    } catch (e) {
      dispatch(fetch_auth_error(e));
    }
  };
};

const registerUser = data => {
  return dispatch => {
    dispatch(fetch_auth_request());

    // const config = {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // };

    axios
      .post(`${BASE_URL}/registration`, data)
      .then(res => {
        if (res.status === 200 || res.status === 201) {
          console.log('getRegData::: ', res.data);
          const userData = res.data.data;
          const _token = res.data._token;
          Keychain.setGenericPassword(
            'token',
            JSON.stringify({
              token: _token,
              authenticated: true,
              info: userData,
            }),
          );
          dispatch(fetch_auth_register(res.data));
          Toast.show({
            topOffset: METRICS._scale(60),
            type: 'success',
            text1: res.data.message,
            visibilityTime: 3000,
          });
        }
      })
      .catch(e => {
        let errMsg = e.response.data;
        dispatch(fetch_auth_error());
        console.log(errMsg);
        // Toast.show({
        //   type: 'error',
        //   text1: errMsg,
        //   position: 'bottom',
        //   visibilityTime: 3000,
        // });
      });
  };
};
const loginUser = data => {
  return dispatch => {
    dispatch(fetch_auth_request());

    axios
      .post(`${BASE_URL}/login`, data)
      .then(res => {
        if (res.status === 200) {
          const userData = res.data.data;
          const _token = res.data._token;
          Keychain.setGenericPassword(
            'token',
            JSON.stringify({
              token: _token,
              authenticated: true,
              info: userData,
            }),
          );
          dispatch(fetch_auth_login(res.data));
          Toast.show({
            topOffset: METRICS._scale(60),
            type: 'success',
            text1: res.data.message,
            visibilityTime: 3000,
          });
        }
      })
      .catch(e => {
        let errMsg = e.response.data.message;
        dispatch(fetch_auth_error(errMsg));
        Toast.show({
          type: 'error',
          text1: errMsg,
          position: 'bottom',
          visibilityTime: 3000,
        });
      });
  };
};

const logout = () => {
  return async dispatch => {
    dispatch(fetch_auth_request());

    await Keychain.resetGenericPassword();

    setTimeout(() => {
      dispatch(fetch_auth_logout());
    }, 500);
  };
};

export {authSlice, registerUser, loginUser, logout};
