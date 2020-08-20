import React from 'react';
import { Provider } from 'react-redux';

import MainNavigation from './Navigation/MainNavigation';
import configureStore from './Redux/store';
// import AppTheme from './ThemeApp';
import ThemeAppContainer from './ThemeAppContainer';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <ThemeAppContainer>
        <MainNavigation></MainNavigation>
      </ThemeAppContainer>
    </Provider>
  );
};

export default App;
