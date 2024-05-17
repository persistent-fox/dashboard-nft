import { ReactChild } from 'react';
import styled, { css } from 'styled-components';

type TButtonCarouselProps = {
	typeBtn?: 'prev' | 'next';
	isDisabled?: boolean;
	children: ReactChild;
};

export const ButtonCarousel = ({ typeBtn, isDisabled, children }: TButtonCarouselProps) => {
	return (
		<StyledButtonCarousel isDisabled={isDisabled} typeBtn={typeBtn}>
			{children}
		</StyledButtonCarousel>
	);
};

type TStyledButtonCarouselProps = {
	typeBtn?: 'prev' | 'next';
	isDisabled?: boolean;
};

const StyledButtonCarousel = styled.button<TStyledButtonCarouselProps>`
	padding: 24px;
	min-height: 75px;
	line-height: 0;
	border-top-left-radius: 18px;
	border-bottom-left-radius: 18px;
	color: ${props => props.theme.colors.secondary};
	background-color: ${props => props.theme.colors.gray.platinum};
	&:hover {
		background-color: ${props => props.theme.colors.gray.ghost};
	}

	${props =>
		props.typeBtn === 'prev' &&
		css`
			background-color: ${props => props.theme.colors.gray.platinum};
		`}
	${props =>
		props.typeBtn === 'next' &&
		css`
			position: relative;
			background-color: ${props => props.theme.colors.gray.platinum};
			transform: rotate(180deg);
			&:before {
				content: '';
				position: absolute;
				top: 50%;
				right: 0;
				transform: translateY(-50%);
				height: 50%;
				width: 2px;
				border-radius: 2px;
				background-color: ${props => props.theme.colors.gray.light};
			}
		`}
	${props =>
		props.isDisabled &&
		css`
			color: ${props => props.theme.colors.gray.medium};
			pointer-events: none;
		`}
`;
