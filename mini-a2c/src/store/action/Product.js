import {ADD_PRODUCT} from '../Type';
export const addProducts = data => {
  return {
    type: ADD_PRODUCT,
    products: data,
  };
};
