import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Divider, Loader, SearchBar } from '../components';
import { TEXT } from '../consts';
import { useForm } from '../hooks/useForm';
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

	const [skiSites, setSkiSites] = useState([]);
	const [query, handleChange, setQuery] = useForm({
		ski_site: '',
		from_date: '',
		to_date: '',
		group_size: 0,
	});

	const handleSearch = async () => {
		setIsLoading(true);
		try {
			const q = {
				ski_site: 1,
				from_date: '12/04/2022',
				to_date: '12/11/2022',
				group_size: 4,
			};

			const sites = await skiService.search(q);
			setSkiSites(sites);
			setIsLoading(false);
		} catch (e) {
			setIsLoading(false);
			setAlertMessage(e.message);
		}
	};

	if (!!alertMessage) {
		return <h1>{alertMessage}</h1>;
	}

	return (
		<StyledMainPage>
			<SearchBar fields={query} onChange={handleChange} onSearch={handleSearch} />
			{isLoading ? <Loader /> : ''}
		</StyledMainPage>
	);
};
