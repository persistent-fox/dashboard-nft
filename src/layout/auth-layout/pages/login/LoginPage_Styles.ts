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

const Element = styled.span`
	display: block;
	text-align: center;
	color: rgba(50, 49, 66, 0.35);
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 0.6px;
	text-transform: uppercase;
	margin: 48px 0;
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

export const S = { LoginPage, Title, Element, Text, Link };
