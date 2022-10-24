import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  products: [],
  error: null,
};
const productSlice = createSlice({
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
      const productData = action.payload.data;

      state.isLoading = false;
      state.products = productData;
      state.error = null;
    },
  },
});

const {actions} = productSlice;
const {fetch_products_request, fetch_products_success} = actions;

const getAllProducts = axi => {
  return async dispatch => {
    dispatch(fetch_products_request());

    const response = await axi.get('/products').catch(error => error.message);
    if (response.status === 200) {
      dispatch(fetch_products_success(response.data));
    }
  };
};

export {productSlice, actions, getAllProducts};
