import {CATEGORY_REQUEST, CATEGORY_SUCCESS} from '../Type';

export const fetch_category_request = () => {
  return {
    type: CATEGORY_REQUEST,
  };
};

export const fetch_category_success = category => {
  return {
    type: CATEGORY_SUCCESS,
    payload: category,
  };
};

export const fetch_category_error = error => {
  return {
    type: CATEGORY_SUCCESS,
    payload: error,
  };
};
