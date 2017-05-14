// Dependencies
// 		
// //  Requires Sequelize package ()
 var Sequelize = require("sequelize");

// // represents connection to the database
 var sequelize = require("../config/connection.js");


module.exports = function(sequelize, dataTypes) {
    var Burger = sequelize.define('Burger', {
    burger_name: {
        type: Sequelize.STRING,
        allowNull: false
        // ,
        // validate: {
        //     notEmpty: {msg: "Burger name must not be empty"}, 
        //     isAlpha: {msg: "Burger name must consist of letters only"}
        // }
    },
    devoured: { 
      type: Sequelize.BOOLEAN, 
      allowNull: false, 
      defaultValue: false
    }
})
    return Burger;
};

//  Create a burger model with custom messages for burger_name validation

//       USE BELOW WITH 'return Burger;' almost at the bottom of the file
    // , 
    // {
    //   classMethods: {
    //     associate: function(models) {
    //       // A Customer (foreignKey) is required or a Burger can't be made 
    //       Burger.belongsTo(models.Customer, {
    //         foreignKey: {
    //           allowNull: false
    //         }
    //       });
    //     }
    //   }   
    // }

//  Could have used this with our models 
// Sync this model with our database

// Burger.sync();

// // Export the database functions for the controller (burgers_controller.js).
// module.exports = Burger;
