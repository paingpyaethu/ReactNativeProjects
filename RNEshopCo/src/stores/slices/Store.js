import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {authSlice} from './auth/authSlice';
import {productsSlice} from './products/productSlice';
import {userSlice} from './users/userSlice';
import {wishListSlice} from './wishlists/wishListSlice';

const middlewares = getDefaultMiddleware({
  immutableCheck: false,
});

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}
export const Store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    auth: authSlice.reducer,
    users: userSlice.reducer,
    wishlists: wishListSlice.reducer,
  },
  middleware: middlewares,
});
