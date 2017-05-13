//  burger-controller.js sets up Routes to display and save data to the database

//  models are required
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

// Create all our routes
  app.get("/", function(req, res) {
    res.redirect("api/burgers");
  });

//router.get("/burgers", function(req, res) {
// WAS var queryString = `SELECT * FROM ${tableInput};`; in other file
  // Find and display all burgers
  app.get("/api/burgers", function(req, res) {
    db.Burger.findAll({}).then(function(results) {
      //res.json(results);
      res.render('index', {burgers: results}); 
      // index hdbrs - check on pluralizing
    });

  });

  // ** Add a burger **
  app.post("/burgers/create", function(req, res) {
  //  console.log("Burger Data: req.body *mrl*", req.body);
    // holds the request
    db.Burger.create({ 
        burger_name: req.body.burger_name
      }).then(function() {
        res.redirect('/api/burgers');
    });
  });

  app.put("/:id", function(req, res) {
//  app.put("/api/update", function(req, res) {
//  UPDATE 
// var queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
  
  db.Burger.update({devoured: true}, {
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.redirect('/api/burgers');
    }
    ); 
  });

  // Delete a Burger
  app.delete("/:id", function(req, res) {

//    console.log("Burger Data: ", req.body);
    db.Burger.destroy({ 
      where: {
        id: req.params.id
      }
    }).then(function(){
      res.redirect('/api/burgers');
    })
  });
};
