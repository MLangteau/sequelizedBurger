//  burger-controller.js sets up Routes to display, save, and delete data to/from the database

//  models are required (burger.js and index.js)
var db = require("../models");

// Create all our routes
module.exports = function(app) {

// Redirects the app to go to the main page, which is /api/burgers
  app.get("/", function(req, res) {
    res.redirect("api/burgers");
  });

  // Find and display all burgers
// var queryString = `SELECT * FROM ${tableInput};`; without sequelize
  app.get("/api/burgers", function(req, res) {
    db.Burger.findAll({}).then(function(results) {
      //res.json(results);
      res.render('index', {burgers: results}); 
      // index hdbrs - check on pluralizing
    });

  });

  // ** Add a burger ** 
  app.post("/burgers/create", function(req, res) {
    db.Burger.create({ 
        burger_name: req.body.burger_name
      }).then(function() {
        res.redirect('/api/burgers');
    });
  });

// Update the burger from not devoured to devoured
// var queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
  app.put("/:id", function(req, res) {
    db.Burger.update({devoured: true}, {
        where: {
          id: req.params.id
        }
    }).then(function() {
        res.redirect('/api/burgers');
    }); 
  });

  // Delete a Burger
  app.delete("/:id", function(req, res) {
    db.Burger.destroy({ 
      where: {
        id: req.params.id
      }
    }).then(function(){
      res.redirect('/api/burgers');
    })
  });
};
