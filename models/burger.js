// Dependencies
// 		
//  Requires Sequelize package ()
var Sequelize = require("sequelize");

// represents connection to the database
var sequelize = require("../config/connection.js");

//  Create a burger model with custom messages for burger_name validation
var Burger = sequelize.define('burger', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    burger_name: {
        type: Sequelize.STRING,
        validate {
            notEmpty: {msg: "Burgur name must not be empty"}, 
            isAlpha: {msg: "Burgur name must consist of letters only"}
        }
    },
    devoured: { 
      type: Sequelize.BOOLEAN, 
      allowNull: false, 
      defaultValue: false
    }
});

/*
    "burgers",
  // Prints out all of the burgers onto the page (devoured and not-devoured)
  selectAll: function(cb) {
    orm.selectAll(this.table, function(res) {
//      console.log(('MODEL all response  = ' + JSON.stringify(res)).inverse.red);
      cb(res);
    });
  },

  // The variables cols and vals are arrays.  Passing the burgers string, etc.
  insertOne: function(name, cb) {
    orm.insertOne(this.table, ["burger_name", "devoured"], [name, false], function(res) {
//        console.log(('MODEL create response  = ' + JSON.stringify(name)).inverse.red);
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    // update one field {devoured: true} and passes it to function in objColVals
    orm.updateOne(this.table, {devoured: true}, condition, function(res) {
//        console.log(('MODEL update response  = ' + JSON.stringify(objColVals)).inverse.red);
      cb(res);
    });
  },

  delete: function(condition, cb) {
    // deletes an entry from the table
    orm.delete(this.table, condition, function(res) {
      cb(res);
    });
  }
};
*/

// Sync this model with our database

Burger.sync();

// Export the database functions for the controller (burgers_controller.js).
module.exports = Burger;
