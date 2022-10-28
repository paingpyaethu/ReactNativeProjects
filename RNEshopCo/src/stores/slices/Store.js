import {configureStore} from '@reduxjs/toolkit';
import productReducer from './products/productSlice';

export const Store = configureStore({
  reducer: {
    products: productReducer,
  },
});
