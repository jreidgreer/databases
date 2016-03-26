var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.queryDB('SELECT * FROM messages', function(err, data) {
        callback(err, data);
      });
    }, // a function which produces all the messages

    post: function (callback, vals) {
      var query = 'INSERT INTO messages (message, user, room)' +
      'VALUES(' + message + ',' + userID + ',' + roomname + ')';
      db.queryDB(query, function(err, data) {
        callback(err, data);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

