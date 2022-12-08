import {configureStore} from '@reduxjs/toolkit';
import {navSlice} from './slices/nav/navSlice';

export const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
  },
});
