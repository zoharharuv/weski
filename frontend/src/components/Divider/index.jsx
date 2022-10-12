import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.div`
	width: 500px;
	border-color: ${({ theme }) => theme.colors.white};
	border-top: 2px solid;
	border-radius: 2px;
`;

export const Divider = () => {
	return <StyledDivider />;
};
