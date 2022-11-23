import {createSlice} from '@reduxjs/toolkit';
import {METRICS} from '../../../themes';
import Toast from 'react-native-toast-message';

const initialState = {
  isLoading: false,
  wishlistData: [],
  error: null,
};

const wishListSlice = createSlice({
  name: 'wishListSlice',
  initialState,
  reducers: {
    add_wishlist_request: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    add_wishlist_success: (state, action) => {
      return {
        ...state,
        isLoading: false,
        wishlistData: [...state.wishlistData, action.payload],
        error: null,
      };
    },
    add_wishlist_error: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    get_wishlist_request: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    get_wishlist_success: (state, action) => {
      const wishlistData = action.payload;
      return {
        // ...state,
        isLoading: false,
        wishlistData: wishlistData,
        error: null,
      };
    },
    get_wishlist_error: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    remove_wishlist_request: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    remove_wishlist_success: (state, action) => {
      return {
        ...state,
        isLoading: false,
        wishlistData: state.wishlistData.filter(
          wishlist => wishlist._id !== action.payload,
        ),
        error: null,
      };
    },
    remove_wishlist_error: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

const {
  add_wishlist_request,
  add_wishlist_success,
  add_wishlist_error,
  get_wishlist_request,
  get_wishlist_success,
  get_wishlist_error,
  remove_wishlist_request,
  remove_wishlist_success,
  remove_wishlist_error,
} = wishListSlice.actions;

const addToWishList = (data, authAxios) => {
  return dispatch => {
    dispatch(add_wishlist_request());

    authAxios
      .post('/add-to-wishlist', data)
      .then(res => {
        if (res.status === 200) {
          dispatch(add_wishlist_success(res.data.data));
          Toast.show({
            topOffset: METRICS._scale(60),
            type: 'success',
            text1: res.data.message,
            visibilityTime: 3000,
          });
        }
      })
      .catch(e => {
        dispatch(add_wishlist_error(e));
      });
  };
};

const getWishlist = authAxios => {
  return dispatch => {
    dispatch(get_wishlist_request());

    authAxios
      .get('/wishlist')
      .then(res => {
        if (res.status === 200) {
          dispatch(get_wishlist_success(res.data.data));
        }
      })
      .catch(e => {
        let errMsg = e.response.data.message;
        dispatch(get_wishlist_error(errMsg));
        Toast.show({
          type: 'error',
          text1: errMsg,
          position: 'bottom',
          visibilityTime: 3000,
        });
      });
  };
};

const removeWishList = (id, authAxios) => {
  return dispatch => {
    dispatch(remove_wishlist_request());

    authAxios
      .delete(`/removeWishlist/${id}`)
      .then(res => {
        if (res.status === 200) {
          dispatch(remove_wishlist_success(id));
          Toast.show({
            topOffset: METRICS._scale(60),
            type: 'success',
            text1: res.data.message,
            visibilityTime: 3000,
          });
        }
      })
      .catch(e => {
        dispatch(remove_wishlist_error(e));
      });
  };
};

export {wishListSlice, addToWishList, getWishlist, removeWishList};
