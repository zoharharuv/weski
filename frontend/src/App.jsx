import React from 'react';
import styled from 'styled-components';
import { MainPage } from './pages/MainPage';

const StyledApp = styled.section`
	height: 100vh;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.lightBlue};
`;

export function App() {
	return (
		<StyledApp>
			<MainPage />
		</StyledApp>
	);
}
