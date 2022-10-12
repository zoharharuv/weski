import React from 'react';
import styled from 'styled-components';
import LoaderImg from '../../assets/img/puff.svg';

const StyledLoader = styled.div`
	display: flex;
	justify-self: center;
	align-self: center;
	img {
		width: 150px;
	}
`;

export const Loader = () => {
	return (
		<StyledLoader>
			<img src={LoaderImg} alt="Loading.." />
		</StyledLoader>
	);
};
