var config = {};

config.dbhost = process.env.DBHOST || 'mongodb://localhost/appointment';
config.host = process.env.HOST || 'http://localhost';

module.exports = config;
