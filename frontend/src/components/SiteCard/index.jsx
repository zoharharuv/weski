import React from 'react';
import styled from 'styled-components';
import starImg from '../../assets/img/star.svg';

const StyledSiteCard = styled.div`
	display: flex;
	width: 900px;
	height: 238px;
	background: #ffffff;
	border: 1px solid #e0e3eb;
	border-radius: 12px;
	color: black;
`;

const SiteImage = styled.img`
	width: 380px;
	height: 100%;
	border-radius: 12px;
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

const StarsContainer = styled.div`
	display: flex;
	gap: 5px;
`;

export const SiteCard = ({ site }) => {
	const { HotelName, HotelDescriptiveContent, HotelInfo, PricesInfo } = site;
	const { URL: hotelImgUrl } = HotelDescriptiveContent.Images[0];
	const { Position, Rating, Beds } = HotelInfo;
	const priceString = `£${PricesInfo.AmountAfterTax} /per person`;
	
	return (
		<StyledSiteCard>
			<SiteImage src={hotelImgUrl} alt="hotel_photo" />
			<SiteContent>
				<h1>{HotelName}</h1>
				<StarsContainer>
					{Array(Number(Rating))
						.fill('')
						.map((_, idx) => (
							<img key={idx} src={starImg} alt="star" />
						))}
				</StarsContainer>
				<p>{priceString}</p>
			</SiteContent>
		</StyledSiteCard>
	);
};
