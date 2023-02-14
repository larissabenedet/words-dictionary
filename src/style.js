import { createGlobalStyle } from 'styled-components'
import Inter from './assets/fonts/inter/Inter-VariableFont_slntwght.ttf'
import Lora from './assets/fonts/lora/Lora-Italic-VariableFont_wght.ttf'
import Inconsolata from './assets/fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.ttf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${Inter}) format('truetype');
  }

  @font-face {
    font-family: 'Lora';
    src: url(${Lora}) format('truetype');
  }

  @font-face {
    font-family: 'Inconsolata';
    src: url(${Inconsolata}) format('truetype');
  }

  :root {
    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    font-family: ${(props) => props.font};
    background-color: ${(props) =>
      props.theme === 'Light' ? 'var(--white)' : 'var(--dark-color)'};
    color: ${(props) =>
      props.theme === 'Light' ? 'var(--medium-light)' : 'var(--white)'};

    --dark-color: #050505;
    --medium-dark: #1F1F1F;
    --medium-light: #2D2D2D;
    --light-black: #3A3A3A;
    --gray: #757575;
    --light-gray: #E9E9E9;
    --gray-white: #F4F4F4;
    --white: #FFFFFF;
    --purple: #A445ED;
    --red: #FF5252;
  }
`
