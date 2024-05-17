import styled from 'styled-components';
import { StyledButton } from '../../../../components/button/Button';
import { MainTitle } from '../../components/MainTitle';
import { Paragraph } from '../../components/Paragraph';

const ForgetPasswordPage = styled.section`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	${MainTitle} {
		margin-bottom: 24px;
	}
	${Paragraph} {
		margin-bottom: 90px;
	}
	${StyledButton} {
		width: 100%;
		margin-top: 34px;
	}
`;

export const S = { ForgetPasswordPage };
