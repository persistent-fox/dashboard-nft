import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper';

const AuthLayout = styled.section`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100vh;
`;

const Frame = styled.a`
	position: absolute;
	top: 48px;
	left: 48px;
	cursor: pointer;
`;

const AuthInfo = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 48px;
	background-color: ${props => props.theme.colors.primary};
	width: 100%;
	height: 100%;
	${FlexWrapper} {
		width: 100%;
	}
`;

const InfoSlides = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	gap: 30px;
	padding: 48px;
	background-color: ${props => props.theme.colors.secondary};
	max-width: 662px;
	width: 100%;
	height: 100%;
`;

const Text = styled.span`
	color: ${props => props.theme.colors.text.gray.light};
	font-size: 16px;
	font-weight: 500;
	letter-spacing: 0.2px;
`;

export const S = { AuthLayout, Frame, AuthInfo, InfoSlides, Text };
