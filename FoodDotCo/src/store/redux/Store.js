import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import ReduxThunk from 'redux-thunk';

//From reducer
import GeneralReducer from './reducer/GeneralReducer';

const rootReducer = combineReducers({
  generalState: GeneralReducer,
});

const Store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const getToken = () => Store?.getState()?.generalState?._token;

export {Store, getToken};
