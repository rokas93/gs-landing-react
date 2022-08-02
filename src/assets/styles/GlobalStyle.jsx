import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Roboto, sans-serif;
}

/* @font-face {
  font-family: Roboto;
  src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
} */



a,
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
}`;

export default GlobalStyle;
