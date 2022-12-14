import React from 'react';
import styled from 'styled-components';
import { TEXT } from '../../consts';
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
	color: ${({ theme }) => theme.colors.grey};
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
				<StyledHeader>{TEXT.SELECT_TRIP}</StyledHeader>
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
