import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
// @ts-ignore
import { composeWithDevTools } from 'redux-devtools-extension';
import { authUserReducer, authLoadingReducer } from '../Auth/reducers/AuthReducer';
import { languageReducer } from '../Common/reducers/LanguageReducer';
import { themeReducer } from '../Common/reducers/ThemeReducer';

export default function configureStore(preloadedState?: any) {
  const middlewares = [thunkMiddleware];
  const rootReducer = combineReducers({
    isAuthLoading: authLoadingReducer,
    currentUser: authUserReducer,
    currentLanguage: languageReducer,
    currentTheme: themeReducer,
  });

  const middlewareEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

  const enhancers = [middlewareEnhancer];
  const composedEnhancers: any = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
