import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.button`
	border: 0;
	outline: 0;

	width: 100px;
	height: 144px;

	max-width: 100px;
	margin: 10px 0 10px;


	${({ suit = 'spades' }) => {
		switch (suit) {
			case 'spades': {
				return `background-position-y: calc(-144px * 2) !important`;
			}
			case 'hearts': {
				return `background-position-y: calc(-144px * 3) !important`;
			}
			case 'clubs': {
				return `background-position-y: 0 !important`;
			}
			case 'diamonds': {
				return `background-position-y: calc(-144px) !important`;
			}
			default:
				return '';
		}
	}}

	${({ isCardHidden = false }) =>
		isCardHidden && 'margin-left: -40px; background-position: calc(-100px * 14) calc(-144px * 2) !important;'}
`;

export const Card = ({ card, isCardHidden = false }) => {
	const [suit, value] = card;
	return (
		<StyledCard
			suit={suit}
			isCardHidden={isCardHidden}
			style={{
				backgroundPositionX: `${-100 * value + 100}px`,
			}}
		></StyledCard>
	);
};
