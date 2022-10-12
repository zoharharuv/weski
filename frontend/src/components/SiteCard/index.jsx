import React from 'react';
import styled from 'styled-components';
import { Divider } from '../Divider';
import { TEXT } from '../../consts';
import starImg from '../../assets/img/star.svg';

const StyledSiteCard = styled.div`
	display: flex;
	width: 900px;
	height: 238px;
	background: ${({ theme }) => theme.colors.white};
	border: 1px solid ${({ theme }) => theme.colors.lightGrey};
	border-radius: 12px;
	color: ${({ theme }) => theme.colors.grey};
`;

const SiteImage = styled.img`
	width: 380px;
	height: 100%;
	border-radius: 12px 0 0 12px;
`;

const SiteContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	padding: 20px;
	gap: 16px;
	width: 480px;
`;

const SiteName = styled.h1`
	color: ${({ theme }) => theme.colors.darkBlue};
`;

const StarsContainer = styled.div`
	display: flex;
	gap: 5px;
`;

const PriceContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	justify-self: flex-end;
	align-self: flex-end;
`;

const StyledPrice = styled.span`
	font-weight: bold;
	font-size: 18px;
	color: ${({ theme }) => theme.colors.darkBlue};
`;

export const SiteCard = ({ site }) => {
	const { HotelName, HotelDescriptiveContent, HotelInfo, PricesInfo } = site;
	const { URL: hotelImgUrl } = HotelDescriptiveContent.Images[0];
	const { Position, Rating } = HotelInfo;

	const priceString = `£${PricesInfo.AmountAfterTax ?? 0}`;

	const { distance } = Position.Distances.find(p => p.type === 'city_center') ?? '';
	const distanceString = distance ? `${distance.split('m').join(' ')}m from center` : '';

	return (
		<StyledSiteCard>
			<SiteImage src={hotelImgUrl} alt="hotel_photo" />
			<SiteContent>
				<SiteName>{HotelName}</SiteName>
				<StarsContainer>
					{Array(Number(Rating ?? 0))
						.fill('')
						.map((_, idx) => (
							<img key={idx} src={starImg} alt="star" />
						))}
				</StarsContainer>
				<p>{distanceString}</p>
				<Divider />
				<PriceContainer>
					<StyledPrice>{priceString}</StyledPrice>
					{TEXT.PER_PERSON}
				</PriceContainer>
			</SiteContent>
		</StyledSiteCard>
	);
};
