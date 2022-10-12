const axios = require('axios');
const SITE_PATH = 'https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator';

async function search(query) {
	const body = { query: query };
	const { data } = await axios.post(SITE_PATH, body);
	const res = data?.body?.accommodations ? [...data?.body?.accommodations] : [];
	
	if (res.length > 1) {
		res.sort((a, b) => parseFloat(a.PricesInfo.AmountAfterTax) - parseFloat(b.PricesInfo.AmountAfterTax));
	}

	return { data: res };
}

module.exports = {
	search,
};
