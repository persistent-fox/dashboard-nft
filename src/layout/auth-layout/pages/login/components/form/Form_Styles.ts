import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 12px;
	max-width: 382px;
	width: 100%;
	padding: 5px;
	margin-bottom: 24px;
	label:first-of-type {
		margin-bottom: 12px;
	}
`;

const Link = styled.a`
	display: block;
	text-align: end;
	color: ${props => props.theme.colors.text.gray.light};
	font-size: 16px;
	margin-bottom: 8px;
`;

export const S = { Form, Link };
