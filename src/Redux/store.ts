import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(preloadedState?: any) {
  const middlewares = [thunkMiddleware];
  const rootReducer = combineReducers({
    example: (state = []) => {
      return state;
    },
  });

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers: any = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
