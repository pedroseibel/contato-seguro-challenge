import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    font-size: 16px;
    line-height: 1.5;
    min-height: 100vh;
    margin: 0
    padding: 0;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
`;

export default GlobalStyles;