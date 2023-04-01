// 전역 CSS 작성
import { createGlobalStyle } from "styled-components";
// reset package import
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
/* Reset CSS */
${reset}

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

a {
	text-decoration: none;
	color: inherit;
}

button {
	border: 0;
	background: transparent;
	font-size: 1.6rem;
}
`;

export default GlobalStyle;
