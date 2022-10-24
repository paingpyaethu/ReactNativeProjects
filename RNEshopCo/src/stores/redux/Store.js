import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from '../rootReducer';

export const Store = configureStore({
  reducer: rootReducer,
});
