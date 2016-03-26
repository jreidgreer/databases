var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.queryDB('SELECT message, user, room FROM messages', function(err, data) {
        callback(err, data);
      });
    }, // a function which produces all the messages

    post: function (sentData, callback) {
      console.log('Attempting to post', sentData);
      var query = 'INSERT INTO messages (message, user, room)' +
      'VALUES("' + sentData.text + '","' + sentData.username + '","' + sentData.roomname + '")';
      db.queryDB(query, function(err, data) {
        callback(err, data);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.queryDB('SELECT user FROM users', function(err, data) {
        callback(err, data);
      });
    },
    post: function (sentData, callback) {
      console.log('Attempting to post to users', sentData);
      var query = 'INSERT INTO users (username)' +
      'VALUES("' + sentData.username + '")';
      db.queryDB(query, function(err, data) {
        callback(err, data);
      });
    }
  }
};

