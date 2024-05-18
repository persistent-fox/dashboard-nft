import React from 'react';
import { MainTitle } from '../../components/MainTitle';
import { Paragraph } from '../../components/Paragraph';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Button } from '../../../../components/button/Button';
import { TextField } from '../../../../components/text-field/TextField';
import { S } from './ResetPasswordPage_Styles';

export const ResetPasswordPage = () => {
	return (
		<S.ResetPasswordPage>
			<MainTitle>Reset Password</MainTitle>
			<Paragraph>Reset And Confirm Password</Paragraph>
			<FlexWrapper direction='column' gap='26px'>
				<TextField iconId='password-login' widthIcon='20' heightIcon='26' viewBoxIcon='0 0 20 26' type='password' />
				<TextField iconId='password-login' widthIcon='20' heightIcon='26' viewBoxIcon='0 0 20 26' type='password' />
			</FlexWrapper>
			<Button>Reset</Button>
		</S.ResetPasswordPage>
	);
};
