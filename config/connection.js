// ***********************************************************************************
//  connection.js sets up MySQL connection for Nodeinitiates the connection to MYSQL
// ***********************************************************************************
 
var Sequelize = require("sequelize");

// Creates MySQL connection using Sequelize
//
var sequelize = new Sequelize("seq_burger", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

//var connection;

// if(process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
//     }
// else {
//     connection = mysql.createConnection({
//         port: 3306,
//         host: "localhost",
//         user: "root",
//         password: "root",
//         database: "burgers_db"
//     });
// };

// Make connection and display threadId for verification of connection
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Export connection for our ORM to use.
module.exports = sequelize;
