import { Button } from '../../../../../../components/button/Button';
import { TextField } from '../../../../../../components/text-field/TextField';
import { S } from './Form_Styles';

export const Form = () => {
	return (
		<S.Form>
			<TextField
				widthIcon='23'
				heightIcon='19'
				viewBoxIcon='0 0 23 19'
				iconId='email-login'
				placeholder='Email'
				type='email'
			/>
			<TextField
				widthIcon='19'
				heightIcon='24'
				viewBoxIcon='0 0 19 24'
				iconId='password-login'
				placeholder='Password'
				type='password'
			/>
			<S.Link href='#'>Forget Password ?</S.Link>
			<Button>Sign in</Button>
		</S.Form>
	);
};
