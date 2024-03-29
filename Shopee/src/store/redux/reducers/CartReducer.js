import {ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART} from '../Type';

const initialState = [];
const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter(cartItem => cartItem !== action.payload);
    case CLEAR_CART:
      return (state = []);
  }
  return state;
};

export default CartReducer;
