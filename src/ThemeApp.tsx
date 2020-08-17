import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

export interface Theme {
  colors: ThemeColors;
  fontFamilies: {
    primary: string;
  };
  fontSizes: {
    standard: string;
    large: string;
  };
  auth: {
    bodyBg: string;
    panelBg: string;
  };
  buttons: {
    primary: {
      hoverColor: string;
      loadingColor: string;
    };
  };
}

type ThemeColors = {
  primary: string;
  border: string;
  text: string;
  altText: string;
  success: string;
  danger: string;
  light: string;
};

const createTheme = (colors: ThemeColors): Theme => {
  const defaultTheme = {
    fontFamilies: {
      primary: `'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
    },
    fontSizes: {
      standard: '0.9rem',
      large: '1rem',
    },
    auth: {
      bodyBg: '#fbfbfe',
      panelBg: '#fff',
    },
    buttons: {
      primary: {
        hoverColor: '#3b33d4',
        loadingColor: '#7871ff',
      },
    },
  };
  return { ...defaultTheme, ...{ colors } };
};

const lightTheme = createTheme({
  primary: '#5850EC',
  border: '#E6ECF5',
  text: '#728096',
  altText: '#728096',
  success: '#0ba578',
  danger: '#F72D66',
  light: '#ffffff',
});

const AppTheme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <div
        className="App"
        css={(theme: Theme) => ({
          fontFamily: theme.fontFamilies.primary,
          fontSize: theme.fontSizes.standard,
          color: theme.colors.text,
        })}
      >
        {children}
      </div>
    </ThemeProvider>
  );
};

export default AppTheme;
