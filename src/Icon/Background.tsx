import React from 'react';
import Svg, { SvgProps } from './Svg';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width='20' {...props}>
    <path d="M35.411 6.66656C35.411 5.44434 34.411 4.44434 33.1888 4.44434H6.66656C5.44434 4.44434 4.44434 5.44434 4.44434 6.66656V33.1888C4.44434 34.411 5.44434 35.411 6.66656 35.411H33.1888C34.411 35.411 35.411 34.411 35.411 33.1888V6.66656ZM33.1888 6.66656V9.58878L30.2666 6.66656H33.1888ZM27.1221 6.66656L33.1888 12.7332V18.3888L21.4666 6.66656H27.1221ZM18.3221 6.66656L33.1888 21.5332V27.1888L12.6554 6.66656H18.3221ZM6.66656 33.1888V30.2221L9.63322 33.1888H6.66656ZM12.7777 33.1888L6.66656 27.0777V21.4221L18.4332 33.1888H12.7777ZM21.5777 33.1888L6.66656 18.2777V12.6221L27.2332 33.1888H21.5777ZM30.3777 33.1888L6.66656 9.47767V6.66656H9.52211L33.1888 30.3332V33.1888H30.3777Z" />
  </Svg>
);

export default Icon;
