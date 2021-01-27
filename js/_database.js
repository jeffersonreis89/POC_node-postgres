const pg = require('pg')

const client = new pg.Client({
    user: 'jeff',
    host: 'localhost',
    database: 'teste',
    password: 'teste',
    port: 5443,
});

module.exports = client;