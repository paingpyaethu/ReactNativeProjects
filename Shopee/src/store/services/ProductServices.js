import {
  delete_product_error,
  delete_product_success,
  fetch_filter_products_success,
  fetch_products_error,
  fetch_products_request,
  fetch_products_success,
} from '../redux/actions/ProductAction';

import Toast from 'react-native-toast-message';
import {METRICS} from '../../theme';

export const getAllProducts = publicAxios => {
  return dispatch => {
    dispatch(fetch_products_request());

    publicAxios
      .get('/products')
      .then(res => {
        if (res.status === 200) {
          let productData = res.data.data;
          // console.log('Product DAta::: ', productData);
          dispatch(fetch_products_success(productData));
        }
      })
      .catch(e => {
        let errMsg = e.response.data.message;
        dispatch(fetch_products_error(errMsg));
        Toast.show({
          type: 'error',
          text1: errMsg,
          position: 'bottom',
          visibilityTime: 3000,
        });
      });
  };
};

export const getFilterProducts = (text, data) => {
  return dispatch => {
    if (text === '') {
      dispatch(fetch_filter_products_success(data));
    }
    dispatch(
      fetch_filter_products_success(
        data.filter(i => i.name.toLowerCase().includes(text.toLowerCase())),
      ),
    );
  };
};

export const deleteProduct = (id, authAxios) => {
  return dispatch => {
    authAxios
      .delete(`/products/${id}`)
      .then(res => {
        if (res.status === 200) {
          dispatch(delete_product_success(id));
          Toast.show({
            topOffset: METRICS._scale(60),
            type: 'success',
            text1: res.data.message,
            visibilityTime: 3000,
          });
        }
      })
      .catch(e => {
        let errMsg = e.response.data.message;
        dispatch(delete_product_error(errMsg));
        Toast.show({
          type: 'error',
          text1: errMsg,
          position: 'bottom',
          visibilityTime: 3000,
        });
      });
  };
};
