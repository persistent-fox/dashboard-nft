import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';
import { slidesData } from '../../mock/data';
import { S } from './AuthLayout_Styles';
import { Carousel } from './components/carousel/Carousel';
import { ControlButtons } from './components/control-buttons/ControlButtons';
import { LoginPage } from './pages/login/LoginPage';

export const AuthLayout = () => {
	return (
		<S.AuthLayout>
			<S.AuthInfo>
				<S.Frame>
					<Icon width='61' height='61' viewBox='0 0 61 61' iconId='logo' />
				</S.Frame>
				<LoginPage />
				<FlexWrapper justify='space-between'>
					<S.Text>Privacy Policy</S.Text>
					<S.Text>Copyright 2022</S.Text>
				</FlexWrapper>
			</S.AuthInfo>
			<S.InfoSlides>
				{/* {slidesData.map(item => (
					<S.Slide key={item.id}>
						<img src={item.img} alt='art' />
						<S.Title>{item.title}</S.Title>
						<S.Description>{item.description}</S.Description>
					</S.Slide>
				))} */}
				<Carousel />
				<ControlButtons />
			</S.InfoSlides>
		</S.AuthLayout>
	);
};
