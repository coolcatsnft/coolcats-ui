import React from 'react';
import Svg, { SvgProps } from './Svg';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width='20' {...props}>
    <path d="M10 4V2H12V4H10M18 12V10H20V12H18M18 16V14H20V16H18M6 4V2H8V4H6M18 8V6H20V8H18M18 4V2H20V4H18M14 4V2H16V4H14M2 20V2H4V18H20V20H2Z" />
  </Svg>
);

export default Icon;
