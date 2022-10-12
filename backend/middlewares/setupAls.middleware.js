const logger = require('../services/logger.service');
const asyncLocalStorage = require('../services/als.service');

async function setupAsyncLocalStorage(req, res, next) {
	const storage = {};
	asyncLocalStorage.run(storage, () => {
		if (req.sessionID) {
			const alsStore = asyncLocalStorage.getStore();
			alsStore.sessionId = req.sessionID;
			if (req.session.customer) {
				alsStore.customerId = req.session.customer._id;
				alsStore.isAdmin = req.session.customer.isAdmin;
			}
		}
		next();
	});
}

module.exports = setupAsyncLocalStorage;
