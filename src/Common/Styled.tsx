import styled, { Interpolation } from '@emotion/styled';
import { Theme } from '../ThemeApp';
import { ComponentType, FC } from 'react';

type propsType = (props: { theme: Theme; [key: string]: any }) => Interpolation<any>;

const Styled = (tag: string | ComponentType | FC<any>, cb: propsType) => {
  // @ts-ignore
  return styled(tag)(cb);
};

export default Styled;
