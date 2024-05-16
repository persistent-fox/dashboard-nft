import { Container } from '../../../../components/Container';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Button } from '../../../../components/button/Button';
import { Icon } from '../../../../components/icon/Icon';
import { Form } from './components/form/Form';
import { S } from './LoginPage_Styles';

export const LoginPage = () => {
	return (
		<S.LoginPage>
			<Container type='small'>
				<S.Title>Sign In To DiveSea</S.Title>
				<FlexWrapper gap='20px'>
					<Button typeBtn='secondary'>
						<Icon width='23' height='23' viewBox='0 0 23 23' iconId='gmail-login' />
					</Button>
					<Button typeBtn='secondary'>
						<Icon width='27' height='31' viewBox='0 0 27 31' iconId='apple-login' />
					</Button>
				</FlexWrapper>
				<S.Element>OR</S.Element>
				<Form />
				<S.Text>
					Create A New Account? <S.Link href='#'> Sign Up</S.Link>
				</S.Text>
			</Container>
		</S.LoginPage>
	);
};
