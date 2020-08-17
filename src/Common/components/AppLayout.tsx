import React from 'react';
import { ReactComponent as Logo } from '../../assets/img/Logo.svg';
import Styled from '../Styled';

const HeaderContainer = Styled('div', ({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: 64,
  borderBottom: `1px solid ${theme.colors.border}`,
}));

const LogoItem = Styled('div', ({ theme }) => ({
  width: 254,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRight: `1px solid ${theme.colors.border}`,
  color: theme.colors.primary,
  svg: {
    height: 36,
  },
}));

const HeaderRight = Styled('div', ({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  flex: '1 0 auto;',
  padding: '0 16px',
}));

const Layout: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoItem>
        <Logo />
      </LogoItem>
      <HeaderRight></HeaderRight>
    </HeaderContainer>
  );
};

export default Layout;
