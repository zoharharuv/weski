import { httpService } from './http.service';

export const skiService = {
	search,
};

async function search(query) {
	return await httpService.post('ski/search', query);
}
