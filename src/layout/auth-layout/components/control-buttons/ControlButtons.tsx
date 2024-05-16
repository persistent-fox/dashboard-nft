import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

export const ControlButtons = () => {
	return (
		<StyledControlButtons>
			<button>
				<Icon width='29' height='30' viewBox='0 0 29 30' iconId='arrow-slide' />
			</button>
			<button>
				<Icon width='29' height='30' viewBox='0 0 29 30' iconId='arrow-slide' />
			</button>
		</StyledControlButtons>
	);
};

const StyledControlButtons = styled.div`
	display: inline-block;
	border-radius: 18px;
	overflow: hidden;
	min-height: 75px;
	background: ${props => props.theme.colors.gray.platinum};
	box-shadow: 0px 40px 32px -24px rgba(15, 15, 15, 0.12);
	button {
		position: relative;
		padding: 24px;
		border-radius: 0;
		line-height: 0;
		color: ${props => props.theme.colors.gray.medium};
		background-color: ${props => props.theme.colors.gray.platinum};
		&:hover {
			background-color: ${props => props.theme.colors.gray.light};
		}
		&:last-child {
			transform: rotate(180deg);
			&:before {
				content: '';
				position: absolute;
				top: 50%;
				right: 0;
				transform: translateY(-50%);
				height: 50%;
				width: 2px;
				border-radius: 2px;
				background-color: ${props => props.theme.colors.gray.light};
			}
		}
	}
`;
