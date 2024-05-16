import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle<{
	theme: typeof theme;
}>`
	*, *::before, *::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	a {
		color: ${props => props.theme.colors.secondary};
		text-decoration: none;
		cursor: pointer;
	}

	input {
		border: none;
		&:focus-visible {
			outline: 2px solid ${props => props.theme.colors.secondary};
		}
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
		font-family: 'Poppins', sans-serif;
		color: ${props => props.theme.colors.secondary};
		font-size: 14px;
		font-weight: 500;
		line-height: 1.2;
		letter-spacing: 0.189px;
  }
`;
