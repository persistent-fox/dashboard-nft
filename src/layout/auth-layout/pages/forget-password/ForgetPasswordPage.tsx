import { Container } from '../../../../components/Container';
import { Button } from '../../../../components/button/Button';
import { TextField } from '../../../../components/text-field/TextField';
import { MainTitle } from '../../components/MainTitle';
import { Paragraph } from '../../components/Paragraph';
import { S } from './ForgetPasswordPage_Styled';

export const ForgetPasswordPage = () => {
	return (
		<S.ForgetPasswordPage>
			<Container>
				<MainTitle>Forget Password</MainTitle>
				<Paragraph>Enter Your Mail To Reset</Paragraph>
				<TextField
					iconId='email-login'
					type='email'
					placeholder='Email'
					widthIcon='24'
					heightIcon='19'
					viewBoxIcon='0 0 24 19'
				/>
				<Button typeBtn='primary'>Verify</Button>
			</Container>
		</S.ForgetPasswordPage>
	);
};
