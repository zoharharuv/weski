import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
	padding-block: 12px;
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.grey};
	display: flex;
	align-items: center;
	justify-content: center;
	padding-inline: 8vw;
	h1 {
		font-size: 20px;
	}
	.inputLabel {
		color: 'lightgray';
	}
`;

export const AppHeader = () => {
	return (
		<StyledHeader>
			<h1>WeSki</h1>
		</StyledHeader>
	);
};
