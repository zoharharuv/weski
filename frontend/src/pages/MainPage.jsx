import React, { useState } from 'react';
import styled from 'styled-components';
import { Divider, Loader } from '../components';
import { TEXT } from '../consts';
import { skiService } from '../services/ski.service';

const StyledMainPage = styled.section`
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;
	margin-top: 10px;
`;


export const MainPage = () => {
	const [alertMessage, setAlertMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	
	const [player, setPlayer] = useState({
		name: 'player',
		score: 0,
		deck: [],
	});

	const startGame = async () => {
		setIsLoading(true);
		try {
		} catch (e) {
			setIsLoading(false);
			setAlertMessage(e.message);
		}
	};


	if (!!alertMessage) {
		return <h1>{alertMessage}</h1>;
	}

	return isLoading ? (
		<Loader />
	) : (
		<StyledMainPage>
		
			<Divider />
		
		</StyledMainPage>
	);
};
