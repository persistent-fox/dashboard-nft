import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Button } from '../../../../components/button/Button';
import { Icon } from '../../../../components/icon/Icon';
import { S } from './SignUpPage_Styles';
import { Element } from './../../components/Element';
import { Form } from './form/Form';
import { MainTitle } from '../../components/MainTitle';

export const SignUpPage = () => {
	return (
		<S.SignUpPage>
			<MainTitle>Sign Up To DiveSea</MainTitle>
			<FlexWrapper gap='20px'>
				<Button typeBtn='secondary'>
					<Icon width='23' height='23' viewBox='0 0 23 23' iconId='gmail-login' />
				</Button>
				<Button typeBtn='secondary'>
					<Icon width='27' height='31' viewBox='0 0 27 31' iconId='apple-login' />
				</Button>
			</FlexWrapper>
			<Element>OR</Element>
			<Form />
			<S.Text>
				Create A New Account? <S.Link href='#'> Sign Up</S.Link>
			</S.Text>
		</S.SignUpPage>
	);
};
