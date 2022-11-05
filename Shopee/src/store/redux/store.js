import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  compose,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import AuthReducer from './reducers/AuthReducer';

//From Reducers
import CartReducer from './reducers/CartReducer';

const rootReducer = combineReducers({
  cartItems: CartReducer,
  auth: AuthReducer,
});
const middlewareEnhancer = applyMiddleware(ReduxThunk);
let composeEnhancers = compose;
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(rootReducer, composeEnhancers(middlewareEnhancer));

export default store;
