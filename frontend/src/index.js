import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { GlobalStyle } from './styles/globalStyle';
import { DesignSystemThemeProvider } from './styles/designSystemThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<DesignSystemThemeProvider>
			<GlobalStyle />
			<App />
		</DesignSystemThemeProvider>
	</React.StrictMode>,
);
