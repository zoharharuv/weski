import React from 'react';
import styled from 'styled-components';
import { SiteCard } from '../SiteCard';

const StyledSitesContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 80px;
`;

const StyledHeader = styled.h1`
	font-size: 28px;
	color: ${({ theme }) => theme.colors.black};
`;

const StyledHeaderDetails = styled.p`
	color: #525d7a;
`;

const StyledCardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0px;
	gap: 20px;
`;

export const SitesContainer = ({ title = '', sites = [] }) => {
	return (
		sites.length && (
			<StyledSitesContainer>
				<StyledHeader>Select your ski trip</StyledHeader>
				<StyledHeaderDetails>{title}</StyledHeaderDetails>
				<StyledCardsContainer>
					{sites.map((site, index) => {
						return <SiteCard key={index} site={site} />;
					})}
				</StyledCardsContainer>
			</StyledSitesContainer>
		)
	);
};
