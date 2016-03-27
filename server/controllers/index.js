var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, data) {
        if (err) {
          console.error('You done messed up.', err);
        } else {
          var result = {
            results: data
          };
          res.send(result);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var sentData = req.body;
      models.messages.post(sentData, function(err, data) {
        if (err) {
          console.error('You done messed up.', err);
        } else {
          res.send('Truth');
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      var sentData = req.query;
      models.users.get(sentData, function(err, data) {
        if (err) {
          console.error('You done messed up.', err);
        } else {
          var result = {
            results: data
          };
          res.send(result);
        }
      });
    },
    post: function (req, res) {
      var sentData = req.body;
      models.users.post(sentData, function(err, data) {
        if (err) {
          console.error('You done messed up.', err);
        } else {
          res.send('Truth');
        }
      });
    }
  }
};

