import { createGlobalStyle } from 'styled-components';

const Variables = {
  gap: '20px',
  'color-primary': '#231F20'
};

export const GlobalStyle = createGlobalStyle`
  :root {
    ${Object.entries(Variables).map(([k, v]) => `--cc-${k}: var(--cc-theme-${k}, ${v});`)}
  }

  *:where(:not(html, iframe, canvas, img, svg, video, audio, input, select):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    transition: all 0.3s;
  }
`;

export default GlobalStyle;
