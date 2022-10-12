import React from 'react';
import styled from 'styled-components';

const StyledSiteCard = styled.div`
	border: 0;
	outline: 0;

	width: 100px;
	height: 144px;

	max-width: 100px;
	margin: 10px 0 10px;
`;

export const SiteCard = ({ site }) => {
	const {} = site;
	return <StyledSiteCard></StyledSiteCard>;
};
