import styled, { css } from 'styled-components';
import { Icon } from '../icon/Icon';

type TTextFieldProps = {
	placeholder?: string;
	iconId?: string;
	widthIcon: string;
	heightIcon: string;
	viewBoxIcon: string;
	type: 'text' | 'password' | 'email';
};

export const TextField = ({ placeholder, type, iconId, widthIcon, heightIcon, viewBoxIcon }: TTextFieldProps) => {
	return (
		<StyledTextField>
			{iconId && <Icon width={widthIcon} height={heightIcon} viewBox={viewBoxIcon} iconId={iconId} />}
			<Input type={type} placeholder={placeholder} />
			{type === 'password' && <Icon width='23' height='21' viewBox='0 0 23 21' iconId='hide-eye-login' />}
		</StyledTextField>
	);
};

export const StyledTextField = styled.label`
	position: relative;
	svg:first-child {
		position: absolute;
		top: 50%;
		left: 24px;
		transform: translateY(-50%);
	}
	svg:last-child {
		position: absolute;
		top: 50%;
		right: 24px;
		transform: translateY(-50%);
	}
`;

type TInputProps = {
	type: 'text' | 'password' | 'email';
};

const Input = styled.input<TInputProps>`
	width: 100%;
	padding: 28px;
	padding-left: 80px;
	border-radius: 14px;
	background: ${props => props.theme.colors.gray.ghost};
	font-family: 'Poppins', sans-serif;
	color: #141416;
	font-size: 16px;
	font-weight: 500;
	letter-spacing: 0.334px;
	text-transform: capitalize;
	&::placeholder {
		color: ${props => props.theme.colors.text.gray.silver};
		font-size: 16px;
		font-weight: 600;
		letter-spacing: 1.167px;
		text-transform: uppercase;
	}
	&:focus-visible {
		background-color: ${props => props.theme.colors.primary};
	}
	${props =>
		props.type === 'password' &&
		css`
			padding: 28px 58px 28px 80px;
		`}
`;
