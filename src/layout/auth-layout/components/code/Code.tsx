import styled from 'styled-components';

export const Code = styled.input`
	font-family: 'Poppins', sans-serif;
	padding: 0 5px;
	font-size: 62px;
	font-weight: 400;
	line-height: 1.2;
	border: none;
	text-align: center;
	border-bottom: 2px solid ${props => props.theme.colors.gray.mistyGray};
	width: 75px;
	height: 75px;
	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		appearance: none;
	}
	&::placeholder {
		color: ${props => props.theme.colors.text.gray.mistyGray};
	}
	&:not(:placeholder-shown) {
		color: ${props => props.theme.colors.text.secondary};
		border-bottom: 2px solid ${props => props.theme.colors.secondary};
	}
	&:focus-visible {
		outline: none;
		border-bottom: 2px solid ${props => props.theme.colors.secondary};
	}
`;
