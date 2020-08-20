import React from 'react';
import { Provider } from 'react-redux';

import MainNavigation from './Navigation/MainNavigation';
import configureStore from './Redux/store';
import AppTheme from './ThemeApp';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <AppTheme>
        <I18nextProvider i18n={i18n}>
          <MainNavigation></MainNavigation>
        </I18nextProvider>
      </AppTheme>
    </Provider>
  );
};

export default App;
