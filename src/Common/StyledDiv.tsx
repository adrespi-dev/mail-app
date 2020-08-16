import styled, { Interpolation } from '@emotion/styled';
import { Theme } from '../ThemeApp';
import { ComponentType } from 'react';

type propsType = (props: { theme: Theme }) => Interpolation<any>;
const Styled = (tag: string | ComponentType, cb: propsType) => {
  // @ts-ignore
  return styled(tag)(cb);
};

export default Styled;
