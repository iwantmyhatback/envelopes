let mysql = require('mysql');
let config = require('./config.js');
let Promise = require('bluebird');

let connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});

let asyncQuery = Promise.promisify(connection.query).bind(connection);

connection.connect((err) => {
  if (err) {
    console.error('!!! Connection Error !!!');
  } else {
    console.log('*** Connection Success! ***');
  }
});

module.exports.connection = connection;
module.exports.asyncQuery = asyncQuery;
