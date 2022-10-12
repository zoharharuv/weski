const logger = require('../../services/logger.service');
const skiService = require('./ski.service');

async function search(req, res) {
	try {
		const query = req.body;
		logger.info(`Searching ski sites for query ${JSON.stringify(query)}`);
		const sites = await skiService.search(query);
		res.send(sites);
	} catch (err) {
		logger.error('Failed search for ski sites', err);
		res.status(500).send({ err: 'Failed search for ski sites' });
	}
}

module.exports = {
	search,
};
