const logger = require('../services/logger.service');

async function log(req, res, next) {
	if (req.session && req.session.customer) {
		logger.info('Req from: ' + req.session.customer.fullname);
	}
	next();
}

module.exports = {
	log,
};
