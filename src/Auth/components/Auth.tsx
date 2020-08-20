import React, { useState } from 'react';
import Styled from '../../Common/Styled';
import { ReactComponent as _Logo } from '../../assets/img/Logo.svg';
import { ReactComponent as _Bird } from '../../assets/img/Bird.svg';
import User1 from '../../assets/img/users/User1.png';
import LoginInput from './LoginInput';
import Button from '../../Common/components/Button';
import Loader from '../../Common/components/Loader';
import Language from '../../Common/models/Language';
import { useTranslation } from 'react-i18next';
import LanguageDropdownContainer from '../../Common/containers/LanguageDropdownContainer';
import ThemeDropdownContainer from '../../Common/containers/ThemeDropdownContainer';
import { isDarkTheme } from '../../Common/utils';

type Props = {
  isLoading: boolean;
  language: Language;
  setLanguage: (language: string) => void;
  signIn: () => void;
};

const AuthContainer = Styled('div', ({ theme }) => ({
  height: '100%',
  width: '100%',
  background: theme.colors.auth.bodyBg,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const AuthPanel = Styled('div', ({ theme }) => ({
  position: 'relative',
  padding: '1.25rem',
  backgroundColor: theme.colors.auth.panelBg,
  width: '100%',
  maxWidth: '420px',
  boxShadow: ` 0 12px 18px 2px rgba(34,0,51,.04),
      0 6px 22px 4px rgba(7,48,114,.12),
      0 6px 10px -4px rgba(14,13,26,.12)`,
  borderRadius: 16,
}));

const TopRow = Styled('div', ({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  // justifyContent: 'flex-end',
  justifyContent: 'space-between',
  marginBottom: '2.2rem',
}));

const Logo = Styled(_Logo, ({ theme }) => ({
  height: 42,
  color: theme.colors.primary,
  display: 'block',
  margin: '0 auto',
  marginBottom: '3.25rem',

  '#logo_mailer': {
    color: isDarkTheme(theme) ? theme.colors.text : theme.colors.primary,
  },
}));

const AvatarUser = Styled('img', ({ theme }) => ({
  display: 'block',
  height: 112,
  margin: '0 auto',
  borderRadius: '50%',
  marginBottom: '1.25rem',
}));

const AvatarName = Styled('div', ({ theme }) => ({
  textAlign: 'center',
  color: isDarkTheme(theme) ? theme.colors.text : theme.colors.primary,
  fontSize: theme.fontSizes.large,
  fontWeight: 700,
}));

const AvatarEmail = Styled('div', ({ theme }) => ({
  textAlign: 'center',
  color: theme.colors.altText,
  fontSize: theme.fontSizes.standard,
  marginBottom: '3.25rem',
}));

const Bird = Styled(_Bird, ({ theme }) => ({
  position: 'absolute',
  right: '-173px',
  top: '-153px',
}));

const Auth: React.FC<Props> = ({ signIn, isLoading }) => {
  const { t } = useTranslation();
  const [isValid, setValid] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isValid) {
      signIn();
    }
  };

  return (
    <AuthContainer>
      <AuthPanel>
        <TopRow>
          <ThemeDropdownContainer />
          <LanguageDropdownContainer />
        </TopRow>
        <Logo></Logo>
        <AvatarUser src={User1}></AvatarUser>
        <AvatarName>Antonela Reyna</AvatarName>
        <AvatarEmail>antitoreyna@gmail.com</AvatarEmail>
        <form onSubmit={handleSubmit}>
          <LoginInput onValidationChanged={setValid} placeholder={`${t('Password')}...`} />
          <Button
            className="w-100"
            isLoading={isLoading}
            disabled={!isValid || isLoading}
            color="primary"
            style={{ marginBottom: '1.5rem', height: 48 }}
          >
            {!isLoading ? <div>Sign In</div> : <Loader size={24} />}
          </Button>
        </form>
        <Bird />
      </AuthPanel>
    </AuthContainer>
  );
};
export default Auth;
