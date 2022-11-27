import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  restaurantData: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
  },
};

export const restaurantSlice = createSlice({
  name: 'restaurantSlice',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurantData = action.payload;
    },
  },
});

export const {setRestaurant} = restaurantSlice.actions;

export default restaurantSlice.reducer;
