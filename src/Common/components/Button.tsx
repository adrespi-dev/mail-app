import React, { ButtonHTMLAttributes } from 'react';
import Styled from '../Styled';
import classNames from 'classnames';
import { isDarkTheme } from '../utils';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  color: 'primary' | 'success' | 'danger';
  size?: 'sm' | 'lg';
}

const StyledButton = Styled('button', ({ theme, color, size }) => ({
  height: 38,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  border: `2px solid ${theme.colors.border}`,
  fontWeight: 700,
  transition: 'all 0.2s ease-in',

  '&:not([disabled]).btn-primary': {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
    color: theme.colors.light,

    '&:hover': {
      borderColor: theme.buttons.primary.hoverColor,
      backgroundColor: theme.buttons.primary.hoverColor,
    },
  },

  '&:disabled, &[disabled]': {
    borderColor: 'transparent',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    boxShadow: 'none',
    color: isDarkTheme(theme) ? 'rgb(255 255 255 / 42%)' : 'rgba(0, 0, 0, 0.47)',
  },

  '&.btn-loading': {
    '&.btn-primary': {
      borderColor: theme.buttons.primary.loadingColor,
      backgroundColor: theme.buttons.primary.loadingColor,
      color: theme.colors.light,
    },
  },
}));

const Button: React.FC<Props> = (props) => {
  const buttonClass = classNames(props.className, {
    btn: true,
    'btn-loading': props.isLoading,
    [`btn-${props.color}`]: true,
  });
  return <StyledButton {...props} className={buttonClass}></StyledButton>;
};

export default Button;
