const { NODE_ENV } = require('../secrets');
const knex = require('knex');
const configs = require('../../knexfile');

module.exports = knex(configs[NODE_ENV]);
