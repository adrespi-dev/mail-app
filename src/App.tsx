import React from 'react';
import { Provider } from 'react-redux';

import MainNavigation from './Navigation/MainNavigation';
import configureStore from './Redux/store';
import AppTheme from './ThemeApp';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <AppTheme>
        <MainNavigation></MainNavigation>
        {/* </div> */}
      </AppTheme>
    </Provider>
  );
};

export default App;
