import {
  FILTER_PRODUCTS_SUCCESS,
  PRODUCTS_DELETE,
  PRODUCTS_DELETE_ERROR,
  PRODUCTS_ERROR,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
} from '../Type';

const initialState = {
  isLoading: false,
  products: [],
  filteredProducts: [],
  error: null,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return {...state, isLoading: true};
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case FILTER_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        filteredProducts: action.payload,
      };
    case PRODUCTS_ERROR:
      return {...state, isLoading: false, error: action.payload};
    case PRODUCTS_DELETE:
      return {
        ...state,
        isLoading: false,
        filteredProducts: state.filteredProducts.filter(
          product => product.id !== action.payload,
        ),
        error: null,
      };
    case PRODUCTS_DELETE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
  }
  return state;
};

export default ProductReducer;
