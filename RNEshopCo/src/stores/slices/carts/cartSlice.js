import {createSlice} from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import {METRICS} from '../../../themes';

const initialState = {
  isLoading: false,
  cartData: [],
  error: null,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    add_cart_request: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    add_cart_success: (state, action) => {
      const {
        _id,
        productName,
        productImage,
        productPrice,
        userId,
        productId,
        Stock,
      } = action.payload;

      let cartProduct = {
        _id: _id,
        productId: productId,
        productName: productName,
        quantity: 1,
        productImage: productImage,
        productPrice: productPrice,
        userId: userId,
        Stock: Stock,
      };
      return {
        ...state,
        isLoading: false,
        cartData: [...state.cartData, cartProduct],
      };
    },
    add_cart_error: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    decrease_qty: (state, action) => {
      let updatedProduct = state.cartData.map(curElem => {
        if (curElem._id === action.payload) {
          let decQty = curElem.quantity - 1;

          if (decQty <= 1) {
            decQty = 1;
          }

          return {
            ...curElem,
            quantity: decQty,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cartData: updatedProduct,
      };
    },
    increase_qty: (state, action) => {
      let updatedProduct = state.cartData.map(curElem => {
        if (curElem._id === action.payload) {
          let incQty = curElem.quantity + 1;

          if (incQty >= curElem.Stock) {
            incQty = curElem.Stock;
          }

          return {
            ...curElem,
            quantity: incQty,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cartData: updatedProduct,
      };
    },
    update_cart_request: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    update_cart_success: (state, action) => {
      let updatedProduct = state.cartData.map(cart => {
        if (cart._id === action.payload) {
          return {
            ...cart,
            quantity: cart.quantity,
          };
        } else {
          return cart;
        }
      });
      return {
        ...state,
        cartData: updatedProduct,
      };
    },
    update_cart_error: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    get_cart_request: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    get_cart_success: (state, action) => {
      return {
        ...state,
        isLoading: false,
        cartData: action.payload,
      };
    },
    get_cart_error: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    remove_cart_request: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    remove_cart_success: (state, action) => {
      return {
        ...state,
        isLoading: false,
        cartData: state.cartData.filter(cart => cart._id !== action.payload),
      };
    },
    remove_all_cart_success: (state, action) => {
      return {
        ...state,
        isLoading: false,
        cartData: [],
      };
    },
    remove_cart_error: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

const {
  add_cart_request,
  add_cart_success,
  add_cart_error,
  increase_qty,
  decrease_qty,
  update_cart_request,
  update_cart_success,
  update_cart_error,
  get_cart_request,
  get_cart_success,
  get_cart_error,
  remove_cart_request,
  remove_cart_success,
  remove_all_cart_success,
  remove_cart_error,
} = cartSlice.actions;

const increaseQty = id => {
  return dispatch => {
    dispatch(increase_qty(id));
  };
};

const decreaseQty = id => {
  return dispatch => {
    dispatch(decrease_qty(id));
  };
};

const addToCart = (data, authAxios) => {
  return dispatch => {
    dispatch(add_cart_request());

    authAxios
      .post('/add-to-cart', data)
      .then(res => {
        if (res.status === 200) {
          dispatch(add_cart_success(res.data.data));
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
        dispatch(add_cart_error(errMsg));
        Toast.show({
          type: 'error',
          text1: errMsg,
          position: 'bottom',
          visibilityTime: 3000,
        });
      });
  };
};

const updateCart = (id, quantity, authAxios) => {
  return dispatch => {
    dispatch(update_cart_request());

    authAxios
      .put(`/cart/update/${id}`, quantity)
      .then(res => {
        if (res.status === 200) {
          dispatch(update_cart_success(res.data.data));
          Toast.show({
            topOffset: METRICS._scale(60),
            type: 'success',
            text1: 'Successfully.',
            visibilityTime: 3000,
          });
        }
      })
      .catch(e => {
        let errMsg = e.response.data.message;
        dispatch(update_cart_error(errMsg));
        Toast.show({
          type: 'error',
          text1: errMsg,
          position: 'bottom',
          visibilityTime: 3000,
        });
      });
  };
};

const getCartData = authAxios => {
  return dispatch => {
    dispatch(get_cart_request());

    authAxios
      .get('/cart')
      .then(res => {
        if (res.status === 200) {
          dispatch(get_cart_success(res.data.data));
        }
      })
      .catch(e => {
        let errMsg = e.response.data.message;
        dispatch(get_cart_error(errMsg));
        Toast.show({
          type: 'error',
          text1: errMsg,
          position: 'bottom',
          visibilityTime: 3000,
        });
      });
  };
};

const removeSingleCartData = (id, authAxios) => {
  return dispatch => {
    dispatch(remove_cart_request());

    authAxios
      .delete(`/removeCart/${id}`)
      .then(res => {
        if (res.status === 200) {
          dispatch(remove_cart_success(id));
          Toast.show({
            topOffset: METRICS._scale(60),
            type: 'success',
            text1: res.data.message,
            visibilityTime: 3000,
          });
        }
      })
      .catch(e => {
        dispatch(remove_cart_error(e));
      });
  };
};

const removeAllCartData = () => {
  return dispatch => {
    dispatch(remove_all_cart_success());
  };
};

export {
  cartSlice,
  addToCart,
  updateCart,
  getCartData,
  removeSingleCartData,
  removeAllCartData,
  increaseQty,
  decreaseQty,
};
