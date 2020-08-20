export type ThemeItem = {
  name: string;
  displayName: string;
  icon: 'sun' | 'moon';
};

const THEMES: ThemeItem[] = [
  { name: 'light', displayName: 'Light', icon: 'sun' },
  {
    name: 'dark',
    displayName: 'Dark',
    icon: 'moon',
  },
];

export default THEMES;
