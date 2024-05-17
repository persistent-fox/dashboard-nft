import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';
import { S } from './AuthLayout_Styles';
import { Carousel } from './components/carousel/Carousel';
import { ForgetPasswordPage } from './pages/forget-password/ForgetPasswordPage';
import { VerifyEmailPage } from './pages/verify-email/VerifyEmailPage';

export const AuthLayout = () => {
	return (
		<S.AuthLayout>
			<S.AuthInfo>
				<S.Frame>
					<Icon width='61' height='61' viewBox='0 0 61 61' iconId='logo' />
				</S.Frame>
				{/* <LoginPage /> */}
				{/* <ForgetPasswordPage /> */}
				<VerifyEmailPage />
				<FlexWrapper justify='space-between'>
					<S.Text>Privacy Policy</S.Text>
					<S.Text>Copyright 2022</S.Text>
				</FlexWrapper>
			</S.AuthInfo>
			<S.InfoSlides>
				<Carousel />
			</S.InfoSlides>
		</S.AuthLayout>
	);
};
