var connection = require('./connection.js');

function questionMark(num){
  var arr = [];

  for (var i=0; i<num; i++){
    arr.push("?");
  }
  return arr.toString();
}
function sqlObj(ob){
  var arr = [];
  for (var key in ob){
    arr.push(key + "=" + ob[key]);
  }
  return arr.toString();
}

var orm = {

  selectAll: function(tableInput, callback) {
    var queryString = 'SELECT * FROM burgers' + tableInput; 
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      callback(result);
    });

  },

  create: function(table, cols, vals, callback) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += sqlObj(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }
};



// Export the ORM object in module.exports.
module.exports = orm;