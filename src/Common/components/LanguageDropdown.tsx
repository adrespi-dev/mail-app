import React from 'react';
import Dropdown from './Dropdown/Dropdown';
import LANGUAJES from '../data/languages';
import Language from '../models/Language';
import Styled from '../Styled';

type Props = {
  language: Language;
  setLanguage: (language: string) => void;
};

const LanguageHeader = Styled('div', ({ theme }) => ({
  padding: '4px 10px',
  paddingRight: '0px',
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  width: 92,

  img: {
    marginRight: '4px',
  },
}));

const LanguageDropdown: React.FC<Props> = ({ language, setLanguage }) => {
  return (
    <Dropdown
      value={language.shortName}
      onValueChange={(lan: string) => setLanguage(lan)}
      valueField="shortName"
      items={LANGUAJES}
      headerTemplate={(item: Language) => (
        <LanguageHeader>
          <img alt={item.name} src={item.flagUrl} height="18px" />
          <div>{item.name}</div>
        </LanguageHeader>
      )}
      itemTemplate={(item: Language) => <div>{item.shortName}</div>}
    ></Dropdown>
  );
};

export default LanguageDropdown;
