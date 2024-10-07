import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
`;

export default GlobalStyles;