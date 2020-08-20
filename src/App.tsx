import React from 'react';
import { Provider } from 'react-redux';

import MainNavigation from './Navigation/MainNavigation';
import configureStore from './Redux/store';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
// import AppTheme from './ThemeApp';
import ThemeAppContainer from './ThemeAppContainer';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <ThemeAppContainer>
        <I18nextProvider i18n={i18n}>
          <MainNavigation></MainNavigation>
        </I18nextProvider>
      </ThemeAppContainer>
    </Provider>
  );
};

export default App;
