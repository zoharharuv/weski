import React, { useState } from 'react';
import styled from 'styled-components';
import { SitesContainer, Loader, SearchBar } from '../components';
import { TEXT } from '../consts';
import { useForm } from '../hooks/useForm';
import { skiService } from '../services/ski.service';
const SITES_ARRAY = require('../data/data.json');


const StyledMainPage = styled.section`
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	gap: 40px;
`;

export const MainPage = () => {
	const [alertMessage, setAlertMessage] = useState('');
	const [title, setTitle] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const [skiSites, setSkiSites] = useState([]);
	const [query, handleChange] = useForm({
		ski_site: 1,
		from_date: '12/04/2022',
		to_date: '12/11/2022',
		group_size: 4,
	});

	const handleSearch = async () => {
		setIsLoading(true);
		try {
			const res = await skiService.search(query);
			setSkiSites(res.data);
			const { name: ski_site } = SITES_ARRAY.find(site => site.id === query.ski_site) ?? '';
			setTitle(`${res.data.length} ski trips options . ${ski_site} . ${query.from_date} - ${query.to_date} . ${query.group_size} people`);
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
			{isLoading ? <Loader /> : <SitesContainer sites={skiSites} title={title} />}
		</StyledMainPage>
	);
};
