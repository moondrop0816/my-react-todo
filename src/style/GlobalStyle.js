// 전역 CSS 작성
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  border: 0;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

a {
  text-decoration: none;
  color: inherit;
	display: block;
}

input, button {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}

input:focus, textarea:focus, select:focus {
	outline: none;
}

select {
	border-radius: 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}

button {
	cursor: pointer;
	background: transparent;
	border: 0;
	outline: 0;
	font-size: 1.6rem;
}

/* custom style */

:root {
	--white: #fff;
	--black: #333;
	--base: #fad09f;
	--main-1: #ffb300;
	--main-2: #ff6b01;
	--point-1: #d42926;
	--point-2: #7d8600;
}
html {
	font-size: 62.5%;
}
body {
	font-size: 1.6rem;
	display: flex;
  justify-content: center;
	width: 100vw;
  min-height: 100vh;
	background: var(--base);
	overflow: hidden;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}
`;

export default GlobalStyle;
