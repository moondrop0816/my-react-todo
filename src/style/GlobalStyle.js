// 전역 CSS 작성
import { createGlobalStyle } from "styled-components";
// reset package import
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
/* Reset CSS */
${reset}

/* custom style */
* {
	box-sizing: border-box;
}

html {
	font-size: 62.5%;
	font-family: 'Pretendard';
}

body {
	font-size: 1.6rem;
	display: flex;
  justify-content: center;
	width: 100vw;
  min-height: 100vh;
	overflow: hidden;
}

a {
	text-decoration: none;
	color: inherit;
}

button {
	border: 0;
	background: transparent;
	font-size: 1.6rem;
	padding: 0;
	cursor: pointer;
}
`;

export default GlobalStyle;
