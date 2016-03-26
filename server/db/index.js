var mysql = require('mysql');

exports.dbConnection = mysql.createConnection({
  user: 'root',
  password: 'brown',
  database: 'chat'
});

exports.queryDB = function(query, callback) {
  dbConnection.connect();
  dbConnection.query(query, callback);
  dbConnection.end();
};

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


