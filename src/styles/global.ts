import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --white-500: #fff;

    --gray-100: #f5f8fa;
    --gray-200: #e6ecf0;
    --gray-250: #ccd6dd;
    --gray-300: #d0d5d9;
    --gray-400: #7b8b9a;
    --gray-500: #657786;
    --gray-550: #667580;
    --gray-600: #53626c;
    --gray-700: #1f2226;
    --gray-750: #1f2326;

    --blue-300: #3bb9e3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1170px) {
      font-size: 100%;
    }

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--gray-200);
    text-rendering: optimizeLegibility;
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
