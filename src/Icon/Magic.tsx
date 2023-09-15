import React from 'react';
import Svg, { SvgProps } from './Svg';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg
    viewBox="0 0 400 400"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M200 0C218.262 21.2014 238.404 40.8906 260.185 58.8391C245.672 103.459 237.858 150.865 237.858 200C237.858 249.135 245.672 296.541 260.185 341.161C238.404 359.109 218.262 378.799 200 400C181.738 378.799 161.596 359.109 139.815 341.161C154.328 296.541 162.142 249.135 162.142 200C162.142 150.865 154.328 103.459 139.815 58.8392C161.596 40.8907 181.738 21.2015 200 0Z" fill="#6851FF"/>
    <path d="M98.183 310.312C75.1276 294.994 50.6592 281.457 25 269.911C32.1177 247.797 35.9467 224.322 35.9467 200C35.9467 175.678 32.1177 152.204 25 130.089C50.6591 118.543 75.1275 105.006 98.183 89.6885C106.999 125.102 111.664 162.034 111.664 200C111.664 237.966 106.999 274.898 98.183 310.312Z" fill="#6851FF"/>
    <path d="M288.336 200C288.336 237.966 293.001 274.898 301.817 310.312C324.872 294.994 349.341 281.457 375 269.911C367.882 247.797 364.053 224.322 364.053 200C364.053 175.678 367.882 152.204 375 130.089C349.341 118.543 324.872 105.006 301.817 89.6884C293.001 125.102 288.336 162.034 288.336 200Z" fill="#6851FF"/>
  </Svg>
);

export default Icon;