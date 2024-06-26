import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';
import { S } from './AuthLayout_Styles';
import { Carousel } from './components/carousel/Carousel';
import { ForgetPasswordPage } from './pages/forget-password/ForgetPasswordPage';
import { ResetPasswordPage } from './pages/reset-password/ResetPasswordPage';
import { SetCodePage } from './pages/set-code/SetCodePage';
import { SignUpPage } from './pages/sign-up/SignUpPage';
import { VerifyEmailPage } from './pages/verify-email/VerifyEmailPage';
import { VerifyIdentityPage } from './pages/verify-identity/VerifyIdentity';
import { YourPhotoPage } from './pages/your-photo/YourPhotoPage';

export const AuthLayout = () => {
	return (
		<S.AuthLayout>
			<S.AuthInfo>
				<S.Frame>
					<Icon width='61' height='61' viewBox='0 0 61 61' iconId='logo' />
				</S.Frame>
				{/* <LoginPage /> */}
				{/* <ForgetPasswordPage /> */}
				{/* <VerifyEmailPage /> */}
				{/* <ResetPasswordPage /> */}
				{/* <SignUpPage /> */}
				{/* <SetCodePage /> */}
				{/* <VerifyIdentityPage /> */}
				<YourPhotoPage />
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
