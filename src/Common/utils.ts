import { Theme } from '../ThemeApp';

export function isDarkTheme(theme: Theme) {
  return theme.name === 'dark';
}
