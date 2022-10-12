import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const DesignSystemThemeProvider = ({ children }) => {
	return <ThemeProvider theme={{ ...theme }}>{children}</ThemeProvider>;
};
