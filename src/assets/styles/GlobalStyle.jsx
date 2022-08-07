import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Roboto, sans-serif;
  font-weight: normal;
}




a,
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
}`;

export default GlobalStyle;
