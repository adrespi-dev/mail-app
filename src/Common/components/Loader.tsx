import React, { HTMLAttributes } from 'react';
import { ReactComponent as LoaderSvg } from '../../assets/img/Loader.svg';
import Styled from '../Styled';
import { keyframes } from '@emotion/core';

const loaderAnim = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

interface Props extends HTMLAttributes<SVGElement> {
  size: number;
}

const Loader: React.FC<Props> = (props) => {
  const { size } = props;

  const Animated = Styled(
    (styleProps: any) => <LoaderSvg height={size} width={size} {...styleProps} {...props} />,
    () => ({
      animation: `${loaderAnim} 0.9s linear infinite`,
    }),
  );

  return <Animated />;
};

export default Loader;
