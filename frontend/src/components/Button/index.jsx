import styled from 'styled-components';

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	position: relative;
	box-sizing: border-box;

	border: none;
	border-radius: 40px;
	height: 48px;
	padding: 12px 32px;

	max-width: max-content;
	text-transform: uppercase;

	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.grey};

	&:focus {
		outline: none;
	}

	&:enabled:hover {
		filter: brightness(90%);
	}

	&:enabled:active {
		color: ${({ theme }) => theme.colors.grey};
		background-color: ${({ theme }) => theme.colors.white};
	}
`;
