const database = require('../data/data.json');

async function query() {
	return database;
}

export const databaseService = {
	query,
};
