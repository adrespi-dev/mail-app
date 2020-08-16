import React from 'react';
import { Redirect } from 'react-router-dom';
import Styled from '../../Common/StyledDiv';
import Logo from '../../assets/img/Logo.svg';

type AuthProps = {
  isAuthenticated: boolean;
};

const HeaderContainer = Styled('div', ({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: 64,
  borderBottom: `1px solid ${theme.colors.border}`,
}));

const LogoItem = Styled('div', ({ theme }) => ({
  width: 254,
  height: '100%',
}));

const Auth: React.FC<AuthProps> = () => {
  return (
    <HeaderContainer>
      <LogoItem>
        <Logo />
      </LogoItem>
    </HeaderContainer>
  );
};

const AuthGuard: React.FC<{ isAuthenticated: boolean }> = (props) => {
  const { isAuthenticated } = props;
  if (isAuthenticated) {
    return <Redirect to="/app"></Redirect>;
  } else {
    return <Auth {...props}></Auth>;
  }
};

export default AuthGuard;
