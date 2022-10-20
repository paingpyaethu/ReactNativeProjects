import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import ReduxThunk from 'redux-thunk';

//From Reducers
import CartReducer from './reducers/CartReducer';

const rootReducer = combineReducers({
  cartItems: CartReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
