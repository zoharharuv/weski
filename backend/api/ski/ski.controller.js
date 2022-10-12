const logger = require('../../services/logger.service');
const skiService = require('./ski.service');

async function search(req, res) {
	try {
		const player = req.body;
		logger.info(`Generating hand for ${player?.name ?? 'Unknown'}`);
		const playerWithNewHand = await skiService.search(player);
		res.send(playerWithNewHand);
	} catch (err) {
		logger.error('Failed to generate hand', err);
		res.status(500).send({ err: 'Failed to generate hand' });
	}
}

module.exports = {
	search,
};
