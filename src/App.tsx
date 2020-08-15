import React from 'react';
import { Provider } from 'react-redux';

import MainNavigation from './Navigation/MainNavigation';
import configureStore from './Redux/store';

const App = () => {
  return (
    <div className="App">
      <Provider store={configureStore()}>
        <MainNavigation></MainNavigation>
      </Provider>
    </div>
  );
};

export default App;
