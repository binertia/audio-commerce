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
    transition: 0.3s ease-in-out;
  }

  :root {
    //color
    --black : hsl(0, 0%, 6%);
    --grey : hsl(0, 0%, 94.5%);
    --off-white: hsl(0, 0%, 98.0392156862745%);
    --white: hsl(0, 0%, 100%);
    --peach: hsl(21.35593220338983, 93.65079365079364%, 75.29411764705883%);
    --orange: hsl(21.54929577464788, 64.54545454545456%, 56.86274509803921%);

    //font
    --text: 0.9375rem;
    --price: 1.125rem;
    --link: 0.8125rem;
    
      //phone ::
    --ph-hero: bold 2rem;
    --ph-header: bold 1.75rem;
    --ph-topic: bold 1.5rem;

      //tablet ::
    --tl-hero: bold 3.5rem;
    --tl-header: bold 2.5rem;
    --tl-topic: bold 2rem;
    --tl-product: bold 1.75rem;



  }
`;
