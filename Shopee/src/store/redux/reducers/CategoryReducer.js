import {CATEGORY_ERROR, CATEGORY_REQUEST, CATEGORY_SUCCESS} from '../Type';

const initialState = {
  isLoading: false,
  category: [],
  error: null,
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        category: action.payload,
      };
    case CATEGORY_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
  }
  return state;
};

export default CategoryReducer;
