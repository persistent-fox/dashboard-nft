import React from 'react';
import styled from 'styled-components';

export const Timer = () => {
	return <StyledTimer>(3:23)</StyledTimer>;
};

export const StyledTimer = styled.span`
	display: block;
	color: ${props => props.theme.colors.text.secondary};
	font-size: 22px;
	font-weight: 300;
	letter-spacing: 0.429px;
`;
