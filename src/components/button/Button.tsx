import { ReactChild } from 'react';
import styled, { css } from 'styled-components';

type TButtonProps = {
	typeBtn?: 'primary' | 'secondary';
	children: ReactChild;
};

export const Button = ({ children, typeBtn }: TButtonProps) => {
	return <StyledButton typeBtn={typeBtn}>{children}</StyledButton>;
};

type TStyledButtonProps = {
	typeBtn?: 'primary' | 'secondary';
};

export const StyledButton = styled.button<TStyledButtonProps>`
	padding: 24px;
	background-color: ${props => props.theme.colors.secondary};
	border-radius: 16px;
	color: ${props => props.theme.colors.text.gray.pale};
	font-size: 18px;
	font-weight: 600;
	letter-spacing: 0.534px;
	text-transform: uppercase;
	${props =>
		props.typeBtn === 'secondary' &&
		css`
			background-color: ${props => props.theme.colors.gray.ghost};
		`}
`;
