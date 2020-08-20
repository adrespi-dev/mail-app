import React from 'react';
import Dropdown from './Dropdown/Dropdown';
import Styled from '../Styled';
import THEMES, { ThemeItem } from '../data/themes';
import { Moon, Sun } from 'react-feather';

type Props = {
  themeName: string;
  setTheme: (themeName: 'light' | 'dark') => void;
};

const DropdownHeader = Styled('div', ({ theme }) => ({
  padding: '4px 10px',
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  // width: 96,
  justifyContent: 'flex-end',

  svg: {
    height: 18,
    marginRight: 4,
  },
}));

const ThemeDropdown: React.FC<Props> = ({ themeName, setTheme }) => {
  return (
    <Dropdown
      value={themeName}
      onValueChange={(theme: 'light' | 'dark') => setTheme(theme)}
      valueField="name"
      items={THEMES}
      headerTemplate={(item: ThemeItem) => (
        <DropdownHeader>
          {item.icon === 'moon' ? <Moon /> : <Sun />}
          <div>{item.displayName}</div>
        </DropdownHeader>
      )}
      itemTemplate={(item: ThemeItem) => <div>{item.displayName}</div>}
    ></Dropdown>
  );
};

export default ThemeDropdown;
