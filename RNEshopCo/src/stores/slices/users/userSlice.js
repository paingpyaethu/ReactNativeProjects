import {createSlice} from '@reduxjs/toolkit';

import Toast from 'react-native-toast-message';
import axios from 'axios';

import {BASE_URL} from '../../api_endpoint';
import {METRICS} from '../../../themes';

const initialState = {
  isLoading: false,
  userData: null,
  error: null,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    fetch_users_request: state => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    fetch_users_success: (state, action) => {
      return {
        ...state,
        isLoading: false,
        userData: action.payload.data,
        error: null,
      };
    },
    fetch_users_error: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    update_users_request: state => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    update_users_success: (state, action) => {
      return {
        ...state,
        isLoading: false,
        userData: action.payload.data,
        error: null,
      };
    },
    update_users_error: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

const {
  fetch_users_request,
  fetch_users_success,
  fetch_users_error,
  update_users_request,
  update_users_success,
  update_users_error,
} = userSlice.actions;

const getUserData = authAxios => {
  return dispatch => {
    dispatch(fetch_users_request());

    authAxios
      .get(`${BASE_URL}/user-detail`)
      .then(res => {
        if (res.status === 200) {
          dispatch(fetch_users_success(res.data));
        }
      })
      .catch(e => {
        let errMsg = e.response.data.message;
        dispatch(fetch_users_error(errMsg));
        Toast.show({
          type: 'error',
          text1: errMsg,
          position: 'bottom',
          visibilityTime: 3000,
        });
      });
  };
};

const updateUserData = (data, navigation, authAxios) => {
  return dispatch => {
    dispatch(update_users_request());

    authAxios
      .put(`${BASE_URL}/user/update/info`, data)
      .then(res => {
        if (res.status === 200) {
          dispatch(update_users_success(res.data));
          Toast.show({
            topOffset: METRICS._scale(60),
            type: 'success',
            text1: res.data.message,
            visibilityTime: 3000,
          });
          navigation.goBack();
        }
      })
      .catch(e => {
        let errMsg = e.response.data.message;
        dispatch(update_users_error(e));
        Toast.show({
          type: 'error',
          text1: e,
          position: 'bottom',
          visibilityTime: 3000,
        });
      });
  };
};

export {userSlice, getUserData, updateUserData};
