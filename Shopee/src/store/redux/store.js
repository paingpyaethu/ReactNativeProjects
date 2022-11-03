import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import AuthReducer from './reducers/AuthReducer';

//From Reducers
import CartReducer from './reducers/CartReducer';

const rootReducer = combineReducers({
  cartItems: CartReducer,
  auth: AuthReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
