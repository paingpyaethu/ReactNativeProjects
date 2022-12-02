import {createSlice} from '@reduxjs/toolkit';

import Toast from 'react-native-toast-message';
import {BASE_URL} from '../../api_endpoint';

BASE_URL;
const initialState = {
  orderData: [],
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    add_orders_request: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    add_orders_success: (state, action) => {
      const orderData = action.payload;
      return {
        ...state,
        isLoading: false,
        orderData: [...state.orderData, orderData],
      };
    },
    add_orders_error: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    get_orders_request: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    get_orders_success: (state, action) => {
      const orderData = action.payload;
      return {
        ...state,
        isLoading: false,
        orderData: orderData,
      };
    },
    get_orders_error: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

const {
  add_orders_request,
  add_orders_success,
  add_orders_error,
  get_orders_request,
  get_orders_success,
  get_orders_error,
} = orderSlice.actions;

const saveOrders = (data, authAxios) => {
  return dispatch => {
    dispatch(add_orders_request());

    authAxios
      .post(`${BASE_URL}/order/new`, data)
      .then(res => {
        if (res.status === 201) {
          dispatch(add_orders_success(res.data.data));
        }
      })
      .catch(e => {
        let errMsg = e.response.data.message;
        dispatch(add_orders_error(errMsg));
        Toast.show({
          type: 'error',
          text1: errMsg,
          position: 'bottom',
          visibilityTime: 3000,
        });
      });
  };
};

const getOrders = authAxios => {
  return dispatch => {
    dispatch(get_orders_request());

    authAxios
      .get(`${BASE_URL}/orders/me`)
      .then(res => {
        if (res.status === 200) {
          dispatch(get_orders_success(res.data.orders));
        }
      })
      .catch(e => {
        let errMsg = e.response.data.message;
        dispatch(get_orders_error(errMsg));
        Toast.show({
          type: 'error',
          text1: errMsg,
          position: 'bottom',
          visibilityTime: 3000,
        });
      });
  };
};

export {orderSlice, saveOrders, getOrders};
