import {combineReducers} from '@reduxjs/toolkit';
import {productSlice} from './redux/products/productSlice';

export const rootReducer = combineReducers({
  products: productSlice.reducer,
});
