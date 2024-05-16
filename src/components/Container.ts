import styled, { css } from 'styled-components';

type TContainerProps = {
	type?: 'small' | 'medium' | 'large';
};

export const Container = styled.div<TContainerProps>`
	max-width: 1090px;
	width: 100%;
	margin: 0 auto;
	${props =>
		props.type === 'small' &&
		css`
			max-width: 382px;
		`}
	${props =>
		props.type === 'medium' &&
		css`
			max-width: 715px;
		`}
`;
