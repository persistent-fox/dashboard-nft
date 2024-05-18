import styled from 'styled-components';
import { StyledButton } from '../../../../components/button/Button';
import { MainTitle } from '../../components/MainTitle';
import { FlexWrapper } from '../../../../components/FlexWrapper';

const SignUpPage = styled.section`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 382px;
	${FlexWrapper} {
		button {
			color: ${props => props.theme.colors.text.tertiary};
		}
	}
	${StyledButton} {
		width: 100%;
	}
	${MainTitle} {
		margin-bottom: 48px;
	}
`;

const Form = styled.form`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	gap: 20px;
`;

const Text = styled.span`
	display: block;
	margin: 0 auto;
	color: ${props => props.theme.colors.text.gray.dark};
	text-align: center;
	font-size: 18px;
	font-weight: 400;
	margin-top: 24px;
`;

const Link = styled.a`
	font-size: 18px;
	font-weight: 700;
`;

export const S = { SignUpPage, Form, Text, Link };
