import { httpService } from './http.service';
import { databaseService } from './database.service';

export const skiService = {
	search,
	getSites,
};

async function getSites(filter = null) {
	const { sites } = await databaseService.query();
	if (!filter) return sites;
	const regex = new RegExp(filter, 'i');
	return sites.filter(site => regex.test(site.name));
}

async function search(query) {
	return await httpService.post('ski/search', query);
}
