import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.div`
	width: 100%;
	border-top: 2px solid ${({ theme }) => theme.colors.lightGrey};
	border-radius: 2px;
`;

export const Divider = () => {
	return <StyledDivider />;
};
