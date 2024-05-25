import styled from 'styled-components';
import { MainTitle } from '../../components/MainTitle';

const YourPhotoPage = styled.section`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 54px;
	${MainTitle} {
		margin-bottom: 10px;
	}
	button {
		width: 100%;
	}
`;
export const S = { YourPhotoPage };
