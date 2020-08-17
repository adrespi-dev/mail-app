import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
// @ts-ignore
import { composeWithDevTools } from 'redux-devtools-extension';
import { authUserReducer, authLoadingReducer } from '../Auth/reducers/AuthReducer';

export default function configureStore(preloadedState?: any) {
  const middlewares = [thunkMiddleware];
  const rootReducer = combineReducers({
    isAuthLoading: authLoadingReducer,
    currentUser: authUserReducer,
  });

  const middlewareEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

  const enhancers = [middlewareEnhancer];
  const composedEnhancers: any = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
