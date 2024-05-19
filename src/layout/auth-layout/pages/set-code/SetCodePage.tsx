import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Button } from '../../../../components/button/Button';
import { MainTitle } from '../../components/MainTitle';
import { Paragraph } from '../../components/Paragraph';
import { Code } from '../../components/code/Code';
import { S } from './SetCodePage_styles';

export const SetCodePage = () => {
	return (
		<S.SetCodePage>
			<MainTitle>Set A PIN Code</MainTitle>
			<Paragraph>Enter 04 Digit Code</Paragraph>
			<FlexWrapper gap='26px'>
				<Code />
				<Code />
				<Code />
				<Code />
			</FlexWrapper>
			<Button>verify</Button>
		</S.SetCodePage>
	);
};
