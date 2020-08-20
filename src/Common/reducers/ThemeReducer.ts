import { lightTheme, Theme, darkTheme } from '../../ThemeApp';
import { SET_THEME } from '../actionCreators';

export const themeReducer = (state: Theme = lightTheme, action: any) => {
  const { type, themeName } = action;
  if (type === SET_THEME) {
    const theme = themeName === 'light' ? lightTheme : darkTheme;
    state = { ...theme };
    return state;
  }
  return state;
};
