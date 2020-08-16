import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from '../Auth/reducers/AuthReducer';
// @ts-ignore
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(preloadedState?: any) {
  const middlewares = [thunkMiddleware];
  const rootReducer = combineReducers({
    isAuthenticated: authReducer,
  });

  const middlewareEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

  const enhancers = [middlewareEnhancer];
  const composedEnhancers: any = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
