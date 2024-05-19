import styled from 'styled-components';

const VerifyIdentityPage = styled.section`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 32px;
	button {
		width: 100%;
	}
`;

const IdentityCard = styled.article`
	position: relative;
	display: flex;
	align-items: center;
	gap: 20px;
	width: 100%;
	padding: 20px 34px;
	border-radius: 12px;
	background: ${props => props.theme.colors.primary};
	cursor: pointer;
	&:hover {
		box-shadow: 0px 0px 61.676px 30px rgba(50, 49, 66, 0.2);
	}
`;

const TitleCard = styled.h2`
	color: ${props => props.theme.colors.text.tertiary};
	font-feature-settings: 'clig' off, 'liga' off;
	font-size: 20px;
	font-weight: 600;
`;

const DescriptionCard = styled.p`
	color: ${props => props.theme.colors.text.gray.dove};
	font-feature-settings: 'clig' off, 'liga' off;
	font-size: 16px;
	font-weight: 400;
	max-width: 220px;
`;

export const S = { VerifyIdentityPage, IdentityCard, TitleCard, DescriptionCard };
