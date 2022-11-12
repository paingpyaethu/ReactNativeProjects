import {createSlice} from '@reduxjs/toolkit';

import Toast from 'react-native-toast-message';
import axios from 'axios';

import {BASE_URL} from '../../api_endpoint';

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
  },
});

const {fetch_users_request, fetch_users_success, fetch_users_error} =
  userSlice.actions;

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

export {userSlice, getUserData};
