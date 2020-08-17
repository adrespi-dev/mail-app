import React, { useState } from 'react';
import { CheckCircle as _CheckCircle } from 'react-feather';
import Styled from '../../Common/Styled';
import classNames from 'classnames';

type Props = {
  placeholder?: string;
  onValidationChanged?: (isValid: boolean) => void;
};

const Container = Styled('div', ({ theme }) => ({
  marginBottom: '1.25rem',
  width: '100%',
  height: 48,
  position: 'relative',
  padding: '4px 16px',
  border: '0px solid',
  borderRadius: 4,
  fontSize: theme.fontSizes.standard,
  transition: 'all 0.2s ease-in',
  boxShadow: `0 0 0 2px ${theme.colors.border} inset,
              0 0 0 1px #e0e0e0 inset`,
  input: {
    width: '100%',
    height: '100%',
    border: 0,
  },
  '&.filled': {
    '.placeholder': {
      display: 'none',
    },
  },
  '&.active': {
    boxShadow: `0 0 0 2px ${theme.colors.primary} inset,
                0 0 0 1px #e0e0e0 inset`,
  },
  '&.success': {
    boxShadow: `0 0 0 2px ${theme.colors.success} inset,
                0 0 0 1px #e0e0e0 inset`,
    '.success-icon': {
      transform: 'none',
      opacity: 1,
    },
  },
  '&.invalid': {
    boxShadow: `0 0 0 2px ${theme.colors.danger} inset,
                0 0 0 1px #e0e0e0 inset`,
  },
}));

const Placeholder = Styled('div', ({ theme }) => ({
  position: 'absolute',
  top: '15px',
  color: theme.colors.altText,
  left: '18px;',
  pointerEvents: 'none',
}));

const CheckCircle = Styled(_CheckCircle, ({ theme }) => ({
  position: 'absolute',
  top: '12px',
  right: '10px',
  transition: 'all 0.2s ease-out',
  transform: 'translateY(15px)',
  opacity: 0,
  color: theme.colors.success,
}));

const LoginInput: React.FC<Props> = ({ placeholder, onValidationChanged }) => {
  const [isFilled, setFilled] = useState(false);
  const [isTouched, setTouched] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const containerClass = classNames({
    active: isActive,
    filled: isFilled,
    touched: isTouched,
    success: isSuccess,
    invalid: !isSuccess && isTouched,
  });

  const handleInputChange = (value?: string) => {
    !isTouched && setTouched(true);
    setFilled(value != null && value.length > 0);

    const isValid = value != null && value.length > 2;
    setSuccess(isValid);
    onValidationChanged && onValidationChanged(isValid);
  };

  return (
    <Container className={containerClass}>
      <input
        type="password"
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
      {placeholder && <Placeholder className="placeholder">{placeholder}</Placeholder>}
      <CheckCircle className="success-icon" />
    </Container>
  );
};

export default LoginInput;
