import styled from 'styled-components';

export const IncrementButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 18px;
	height: 18px;
	padding: 6px 12px;
	color: ${({ theme }) => theme.colors.grey};
	background-color: ${({ theme }) => theme.colors.white};
	&:enabled:hover {
		filter: brightness(90%);
	}
	&:enabled:active {
		color: ${({ theme }) => theme.colors.white};
		background-color: ${({ theme }) => theme.colors.grey};
	}
`;
