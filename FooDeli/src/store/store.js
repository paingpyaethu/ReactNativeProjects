import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './slices/carts/cartSlice';
import restaurantReducer from './slices/restaurants/restaurantSlice';

export const store = configureStore({
  reducer: {
    carts: cartReducer,
    restaurants: restaurantReducer,
  },
});
