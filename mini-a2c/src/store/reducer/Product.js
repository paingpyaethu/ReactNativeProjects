import {ADD_PRODUCT} from '../Type';

const initialState = {
  products: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: action.products,
      };
    default:
      return {
        products: state.products,
      };
  }
};
