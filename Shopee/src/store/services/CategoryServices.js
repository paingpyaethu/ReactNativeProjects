import {
  fetch_category_error,
  fetch_category_request,
  fetch_category_success,
} from '../redux/actions/CategoryAction';
import Toast from 'react-native-toast-message';

export const getAllCategories = authAxios => {
  return dispatch => {
    dispatch(fetch_category_request());

    authAxios
      .get('/categories')
      .then(res => {
        if (res.status === 200) {
          dispatch(fetch_category_success(res.data));
        }
      })
      .catch(e => {
        dispatch(fetch_category_error(e));
        console.log(e);
      });
  };
};
