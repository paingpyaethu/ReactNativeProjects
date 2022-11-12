import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from '../../api_endpoint';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetch_products_request: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    fetch_products_success: (state, action) => {
      const products = action.payload;
      return {
        ...state,
        isLoading: false,
        products: products,
      };
    },
    fetch_products_error: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

const {fetch_products_request, fetch_products_success, fetch_products_error} =
  productsSlice.actions;

const getAllProducts = () => {
  return dispatch => {
    dispatch(fetch_products_request());
    axios
      .get(`${BASE_URL}/products`)
      .then(res => {
        if (res.status === 200) {
          dispatch(fetch_products_success(res.data.data));
        }
      })
      .catch(e => {
        dispatch(fetch_products_error(e));
      });
  };
};

export {productsSlice, getAllProducts};
