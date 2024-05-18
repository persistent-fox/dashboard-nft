import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';

const LoginPage = styled.main`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	${FlexWrapper} {
		button {
			color: ${props => props.theme.colors.text.secondary};
			width: 100%;
		}
	}
`;

const Title = styled.h1`
	text-align: center;
	font-size: 34px;
	font-weight: 600;
	letter-spacing: -1.41px;
	margin-bottom: 48px;
`;

const Text = styled.span`
	display: block;
	margin: 0 auto;
	color: ${props => props.theme.colors.text.gray.dark};
	text-align: center;
	font-size: 18px;
	font-weight: 400;
`;

const Link = styled.a`
	font-size: 18px;
	font-weight: 700;
`;

export const S = { LoginPage, Title, Text, Link };
