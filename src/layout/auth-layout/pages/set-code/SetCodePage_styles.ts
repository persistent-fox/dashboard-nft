import styled from 'styled-components';
import { MainTitle } from '../../components/MainTitle';
import { Paragraph } from '../../components/Paragraph';

const SetCodePage = styled.section`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	${MainTitle} {
		margin-bottom: 24px;
	}
	${Paragraph} {
		margin-bottom: 44px;
	}
	button {
		margin-top: 140px;
		width: 100%;
	}
`;

export const S = { SetCodePage };
