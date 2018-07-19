import { injectGlobal } from 'styled-components';
import colors from './resources/colors';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lora|Monsieur+La+Doulaise');

  *, *:before, *:after { box-sizing: border-box }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
    background-color: ${colors.white};
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
