import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	:root {
		--primary-color: crimson;
		--secondary-color: navy;
	}
	body {
		margin: 0;
		padding:0;
		font-family: 'Roboto', sans-serif;
	}
`;

export default GlobalStyle;
