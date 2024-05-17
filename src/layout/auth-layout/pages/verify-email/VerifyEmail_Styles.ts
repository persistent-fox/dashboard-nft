import styled from 'styled-components';
import { MainTitle } from '../../components/MainTitle';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { StyledButton } from '../../../../components/button/Button';

const VerifyEmailPage = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	${FlexWrapper} {
		margin: 44px 0;
	}
	${MainTitle} {
		margin-bottom: 24px;
	}
	${StyledButton} {
		margin-top: 70px;
		width: 100%;
	}
`;

export const S = { VerifyEmailPage };
