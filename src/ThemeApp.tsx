import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

export interface Theme {
  colors: {
    primary: string;
    border: string;
  };
  fonts: {
    primary: string;
  };
}

const lightTheme: Theme = {
  colors: {
    primary: '#5850EC',
    border: '#E6ECF5',
  },
  fonts: {
    primary: `'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  },
};

const AppTheme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App" css={(theme) => ({ fontFamily: theme.fonts.primary })}>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default AppTheme;
