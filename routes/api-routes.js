//  api-routes.js sets up Routes to display and save data to the database

//  Burger model is required
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

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

  // Add a burger
  app.post("/burgers/create", function(req, res) {
    console.log("Burger Data: req.body *mrl*", req.body);
    // holds the request
    db.Burger.create({ burger_name: req.body.burger_name}).then(function() {
      res.redirect('/');
    });
  });

 //app.put("/:id", function(req, res) {
  app.put("/api/update", function(req, res) {
//  UPDATE 
// var queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
  
  db.Burger.update({devoured: true}, {
      where: {
        id: req.body.id
      }
    }).then(function() {
      res.redirect('/');
    }
    ); 
  });


// router.delete("/:id", function(req, res) {
// delete
//     var queryString = `DELETE FROM ${table} WHERE ${condition};`;

  // Delete a Burger
  app.delete("/api/delete", function(req, res) {

    console.log("Burger Data: ", req.body);
    db.Burger.destroy({ 
      where: {
        id: req.body.id
      }
    });
  });
};
