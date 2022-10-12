import React from 'react';
import styled from 'styled-components';
import { AppHeader } from './components';
import { MainPage } from './pages/MainPage';

const StyledApp = styled.section`
	height: 100vh;
	overflow-x: hidden;
	gap: 32px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const MainLayout = styled.main`
	padding-inline: 8vw;
	@include for-mobile-layout {
		padding-inline: 4vw;
	}
`;

export function App() {
	return (
		<StyledApp>
			<AppHeader />
			<MainLayout>
				<MainPage />
			</MainLayout>
		</StyledApp>
	);
}
