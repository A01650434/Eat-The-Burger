var connection = require('./connection.js');

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});


var orm = {

  selectAll: function(callback) {
    connection.query('SELECT * FROM burgers', function (err, result) {
      if (err) throw err;
      callback(result);
    });

  },

  // updateOne()
  updateOne: function(burgerID, callback){
    // Run MySQL Query
    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, result) {
        if (err) throw err;
        callback(result);
      });

  }

};


// Export the ORM object in module.exports.
module.exports = orm;