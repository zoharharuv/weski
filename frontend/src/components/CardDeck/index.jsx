import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
const StyledCardDeck = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledCardsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CardDeck = ({ title, deck = [], isCardHidden = false, score }) => {
	const [firstCard, ...restOfDeck] = deck;
	return (
		deck.length && (
			<StyledCardDeck>
				<StyledCardsContainer>
					<Card card={firstCard} />
					{restOfDeck.map((card, index) => {
						return <Card key={index} card={card} isCardHidden={isCardHidden} />;
					})}
				</StyledCardsContainer>
				{!isCardHidden && <h1>Total score of: {score}</h1>}
			</StyledCardDeck>
		)
	);
};
