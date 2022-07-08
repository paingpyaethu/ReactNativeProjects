import {ADD_PRODUCT, ORDERS, ORDER_DELETE} from '../Type';
export const addProducts = data => {
  return {
    type: ADD_PRODUCT,
    products: data,
  };
};

export const orderProducts = data => {
  return {
    type: ORDERS,
    orders: data,
  };
};

export const orderProductDelete = id => {
  return {
    type: ORDER_DELETE,
    orders: id,
  };
};
