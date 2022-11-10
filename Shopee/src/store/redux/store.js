import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  compose,
} from 'redux';
import ReduxThunk from 'redux-thunk';

//From Reducers
import CartReducer from './reducers/CartReducer';
import AuthReducer from './reducers/AuthReducer';
import ProductReducer from './reducers/ProductReducer';
import CategoryReducer from './reducers/CategoryReducer';

const rootReducer = combineReducers({
  cartItems: CartReducer,
  auth: AuthReducer,
  products: ProductReducer,
  categories: CategoryReducer,
});
const middlewareEnhancer = applyMiddleware(ReduxThunk);
let composeEnhancers = compose;
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(rootReducer, composeEnhancers(middlewareEnhancer));

export default store;
