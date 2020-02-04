var orm = require('../config/orm.js');

var burger = {
    selectAll: function(callback){
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },

    create: function(burger_name, callback){
        orm.create("burgers", ["burger_name", "devoured"], 
        [ name, false ], callback);
        },
      

    update: function(burger_id, callback){
        var condition = "id=" + burger_id;
    orm.update("burgers", {devoured: true}, condition, callback);
  }
};


module.exports = burger;