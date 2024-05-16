import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { slidesData } from '../../../../mock/data';
import styled from 'styled-components';
import './../../../../styles/slider.css';

export const Carousel = () => {
	const slides = slidesData.map(item => (
		<Slide key={item.id}>
			<img src={item.img} alt='art' />
			<Title>{item.title}</Title>
			<Description>{item.description}</Description>
		</Slide>
	));

	return <AliceCarousel items={slides} disableDotsControls />;
};

const Slide = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	max-width: 390px;
	margin: 0 auto;
	gap: 14px;
	img {
		width: 100%;
		max-height: 550px;
		object-fit: cover;
	}
`;

const Title = styled.h2`
	color: ${props => props.theme.colors.primary};
	text-align: center;
	font-family: 'DM Sans';
	font-size: 46px;
	font-weight: 700;
	letter-spacing: -0.947px;
`;

const Description = styled.p`
	text-align: center;
	font-size: 16px;
	font-weight: 400;
	color: ${props => props.theme.colors.text.gray.charcoal};
`;
