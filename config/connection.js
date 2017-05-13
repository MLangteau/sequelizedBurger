// ***********************************************************************************
//  connection.js sets up MySQL connection for Nodeinitiates the connection to MYSQL
// ***********************************************************************************
 
var Sequelize = require("sequelize");

// Creates MySQL connection using Sequelize
//
var sequelize = new Sequelize("burger-seq", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Export connection for our ORM to use.
module.exports = sequelize;
