import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

interface Props {
  theme: Theme;
}

export interface Theme {
  name: string;
  colors: ThemeColors;
  fontFamilies: {
    primary: string;
  };
  fontSizes: {
    standard: string;
    large: string;
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
  modalBg: string;
  selected: string;
  auth: {
    bodyBg: string;
    panelBg: string;
  };
};

const createTheme = (themeName: string, colors: ThemeColors): Theme => {
  const defaultTheme = {
    name: themeName,
    fontFamilies: {
      primary: `'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
    },
    fontSizes: {
      standard: '0.9rem',
      large: '1rem',
    },
    buttons: {
      primary: {
        hoverColor: '#772ce8',
        loadingColor: '#7871ff',
      },
    },
  };
  return { ...defaultTheme, ...{ colors } };
};

export const lightTheme = createTheme('light', {
  primary: '#772ce8',
  border: '#E6ECF5',
  text: '#33475b',
  altText: '#728096',
  success: '#0ba578',
  danger: '#F72D66',
  light: '#ffffff',
  modalBg: '#ffffff',
  selected: '#F5F9FF',
  auth: {
    bodyBg: '#fbfbfe',
    panelBg: '#fff',
  },
});

export const darkTheme = createTheme('dark', {
  primary: '#772ce8',
  border: '#ffffff1f',
  text: '#FFFFFF',
  altText: '#97A6BA',
  success: '#0ba578',
  danger: '#F72D66',
  light: '#ffffff',
  modalBg: '#262B48',
  selected: '#3F4564',
  auth: {
    bodyBg: '#262B48',
    panelBg: '#1c213e',
  },
});

const ThemeApp: React.FC<Props> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
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

export default ThemeApp;
