import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartData: [],
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartData = [...state.cartData, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.cartData.findIndex(
        item => item.id === action.payload.id,
      );

      let newCart = [...state.cartData];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in cart!`,
        );
      }

      state.cartData = newCart;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart} = cartSlice.actions;

// export const selectCartItemsWithId = (state, id) =>
//   state.carts.cartData.filter(item => item.id === id);

export const selectCartTotal = state =>
  state.carts.cartData.reduce((total, item) => (total += item.price), 0);

export default cartSlice.reducer;
