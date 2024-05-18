import styled from 'styled-components';
import { MainTitle } from '../../components/MainTitle';
import { StyledButton } from '../../../../components/button/Button';
import { FlexWrapper } from '../../../../components/FlexWrapper';

const ResetPasswordPage = styled.section`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	${MainTitle} {
		margin-bottom: 24px;
	}
	${FlexWrapper} {
		margin-top: 70px;
		margin-bottom: 40px;
	}
	${StyledButton} {
		width: 100%;
	}
`;

export const S = { ResetPasswordPage };
