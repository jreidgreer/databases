var mysql = require('mysql');

var dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

var queryDB = function(query, callback) {
  console.log('Connected. Attempting to query.');
  dbConnection.query(query, function(err, data) {
    callback(err, data);
  });
};

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = {
  dbConnection: dbConnection,
  queryDB: queryDB
};

