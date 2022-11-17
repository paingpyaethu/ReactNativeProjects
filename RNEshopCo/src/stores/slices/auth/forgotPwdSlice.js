import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  forgotPwd: null,
  error: null,
};

const forgotPwdSlice = createSlice({
  name: 'forgotPwdSlice',
  initialState,
  reducers: {
    fetch_forgot_request: state => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    fetch_forgot_success: (state, action) => {
      return {
        ...state,
        isLoading: false,
        forgotPwd: action.payload,
        error: null,
      };
    },
    fetch_forgot_error: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

const {fetch_forgot_request, fetch_forgot_success, fetch_forgot_error} =
  forgotPwdSlice.actions;
