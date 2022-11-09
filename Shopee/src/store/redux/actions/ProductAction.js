import {
  FILTER_PRODUCTS_SUCCESS,
  PRODUCTS_DELETE,
  PRODUCTS_ERROR,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
} from '../Type';

export const fetch_products_request = () => {
  return {
    type: PRODUCTS_REQUEST,
  };
};

export const fetch_products_success = productData => {
  return {
    type: PRODUCTS_SUCCESS,
    payload: productData,
  };
};

export const fetch_filter_products_success = filterData => {
  return {
    type: FILTER_PRODUCTS_SUCCESS,
    payload: filterData,
  };
};

export const fetch_products_error = error => {
  return {
    type: PRODUCTS_ERROR,
    payload: error,
  };
};

export const delete_product_success = id => {
  return {
    type: PRODUCTS_DELETE,
    payload: id,
  };
};

export const delete_product_error = err => {
  return {
    type: PRODUCTS_DELETE,
    payload: err,
  };
};
