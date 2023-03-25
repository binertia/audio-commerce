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
      font-family: var(--fam);
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
  .padding-r-l {
    padding-left :6.85%;
    padding-right:6.85%;
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
    --fam: 'Manrope', sans-serif;

    --text: 500 0.9375rem var(--fam);
    --price: bold 1.125rem var(--fam);
    --link: bold 0.8125rem var(--fam);
    
      //phone ::
    --ph-hero: bold 2rem var(--fam);
    --ph-header: bold 1.75rem var(--fam);
    --ph-topic: bold 1.5rem var(--fam);

      //tablet ::
    --tl-hero: bold 3.5rem var(--fam);
    --tl-header: bold 2.5rem var(--fam);
    --tl-topic: bold 2rem var(--fam);
    --tl-product: bold 1.75rem var(--fam);

      //desktop ::
    --dt-hero: bold 3.5rem var(--fam);
    --dt-header: bold 2.5rem var(--fam);
    --dt-topic: bold 2rem var(--fam);
    --dt-product: bold 2.5rem var(--fam);
    --dt-suggest-product: bold 1.5rem var(--fam);
  }
`;
