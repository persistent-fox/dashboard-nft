import { Button } from '../../../../components/button/Button';
import { identityData } from '../../../../mock/data';
import { MainTitle } from '../../components/MainTitle';
import { S } from './VerifyIdentity_Styles';
import { IdentityCard } from './identity-card/IdentityCard';

export const VerifyIdentityPage = () => {
	return (
		<S.VerifyIdentityPage>
			<MainTitle>Verify Your Identity</MainTitle>
			{identityData.map(item => (
				<IdentityCard key={item.id} title={item.title} description={item.description} iconId={item.iconId} />
			))}
			<Button>Next</Button>
		</S.VerifyIdentityPage>
	);
};
