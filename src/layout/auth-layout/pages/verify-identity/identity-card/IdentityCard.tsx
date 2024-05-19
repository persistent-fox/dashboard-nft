import { FlexWrapper } from '../../../../../components/FlexWrapper';
import { Icon } from '../../../../../components/icon/Icon';
import { S } from './../VerifyIdentity_Styles';

type TIdentityCardProps = {
	iconId: string;
	title: string;
	description: string;
};

export const IdentityCard = ({ iconId, title, description }: TIdentityCardProps) => {
	return (
		<S.IdentityCard>
			<Icon width='45' height='45' viewBox='0 0 45 45' iconId={iconId} />
			<FlexWrapper direction='column'>
				<S.TitleCard>{title}</S.TitleCard>
				<S.DescriptionCard>{description}</S.DescriptionCard>
			</FlexWrapper>
		</S.IdentityCard>
	);
};
