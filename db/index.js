let db = require("mysql");
let config = require("./config.js");
let Promise = require("bluebird");

let connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

let asyncConnect = Promise.promisify(connection);

connection
  .connect()
  .then(data => {
    // console.log(data);
    console.log("*** Connection Success! ***");
  })
  .catch(err => {
    // console.error(err);
    console.error("!!! Connection Error !!!");
  });
