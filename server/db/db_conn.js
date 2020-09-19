const mysql = require('mysql');
const config = require('./db_config');

const connection = mysql.createConnection(config);
connection.connect();

if(connection){console.log('DB CONNECTED :)')}
else{console.log('DB FALSE :(')}

module.exports = connection;