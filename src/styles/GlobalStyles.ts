import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	*, *::before, *::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		cursor: pointer;
	}

	li {
		list-style: none;
	}

	button {
    background-color: unset;
    border: none;
    cursor: pointer;
  }

  body {
  }
`;
