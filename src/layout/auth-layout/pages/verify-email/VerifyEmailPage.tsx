import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Button } from '../../../../components/button/Button';
import { MainTitle } from '../../components/MainTitle';
import { Paragraph } from '../../components/Paragraph';
import { Code } from '../../components/code/Code';
import { Timer } from '../../components/timer/Timer';
import { S } from './VerifyEmail_Styles';

export const VerifyEmailPage = () => {
	return (
		<S.VerifyEmailPage>
			<MainTitle>Verify Email</MainTitle>
			<Paragraph>Code Send To Your Email</Paragraph>
			<FlexWrapper gap='26px'>
				<Code placeholder='0' type='number' />
				<Code placeholder='0' type='number' />
				<Code placeholder='0' type='number' />
				<Code placeholder='0' type='number' />
			</FlexWrapper>
			<Timer />
			<Button>Verify</Button>
		</S.VerifyEmailPage>
	);
};
