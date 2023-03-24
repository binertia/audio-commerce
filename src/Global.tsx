import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;
  }
  *,
    *::before,
    *::after {
        box-sizing:inherit;
    }
 
    body {
      margin: 0;
      background: var(--bg-color);
      font-family: 'Manrope', sans-serif;
      color: black;
    }
  .nav-hide {
    height: 4rem;
    width: 100%;
    z-index: 40;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    box-shadow: 0 2px 5px -1px rgba(0, 0, 0, .08);
    position: fixed;
    top: -80px;
    transition: 0.3s linear;
  }

  :root {
    --bg-color: yellow;
  }
`;
