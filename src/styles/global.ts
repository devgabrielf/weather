import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/background.png';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --gray-light: #d9d9d9;
    --blue: #6aa2d1;
    --pink: #d2b3c1;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    height: 100vh;
  }

  body {
    height: 100vh;
    background-image: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: montserrat, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
