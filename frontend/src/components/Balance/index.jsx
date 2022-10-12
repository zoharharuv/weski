import React from 'react';
import styled from 'styled-components';
import { TEXT } from '../../consts';
import { IncrementButton } from './IncrementButton';

const StyledBalance = styled.div`
	width: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: fixed;
	right: 40px;
	bottom: 40px;
`;

const StyledIncrement = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
`;

const MINUS_INCREMENT = -5;
const PLUS_INCREMENT = 5;

export const Balance = ({ amount, increment, onSetIncrement, isPlayerLost }) => {
	return (
		<StyledBalance>
			{isPlayerLost ? (
				<p>{TEXT.PLAYER_LOST}</p>
			) : (
				<>
					<p>
						{TEXT.BALANCE_AMOUNT} {amount}$
					</p>
					<StyledIncrement>
						<p>
							{TEXT.BALANCE_INCREMENT} {increment}$
						</p>
						<IncrementButton onClick={() => onSetIncrement(MINUS_INCREMENT)}>
							{TEXT.MINUS_INCREMENT_SIGN}
						</IncrementButton>
						<IncrementButton onClick={() => onSetIncrement(PLUS_INCREMENT)}>
							{TEXT.PLUS_INCREMENT_SIGN}
						</IncrementButton>
					</StyledIncrement>
				</>
			)}
		</StyledBalance>
	);
};
