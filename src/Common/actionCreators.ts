export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_THEME = 'SET_THEME';

export const setLanguage = (languageShortName: string) => ({
  type: SET_LANGUAGE,
  languageShortName,
});

export const setTheme = (themeName: 'light' | 'dark') => ({
  type: SET_THEME,
  themeName,
});
