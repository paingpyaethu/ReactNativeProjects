import {IS_NEW_USER, SET_TOKEN, SET_USER_DATA} from '../Type';

const initialState = {
  _token: '',
  isNewUser: true,
  userData: {},
};

const GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {...state, _token: action.payload};
    case IS_NEW_USER:
      return {...state, isNewUser: action.payload};
    case SET_USER_DATA:
      return {...state, userData: action.payload};
    default:
      return state;
  }
};

export default GeneralReducer;
