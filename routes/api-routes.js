//  api-routes.js sets up Routes to display and save data to the database

//  Burger model is required
var Burger = require("../models/burger.js");

// Routes
// =============================================================
module.exports = function(app) {

router.get("/burgers", function(req, res) {
// WAS var queryString = `SELECT * FROM ${tableInput};`; in other file
  // Find and display all burgers
  app.get("/api/burgers", function(req, res) {

    Burger.findAll({}).then(function(results) {
      res.json(results);
    });

  });

// router.post("/burgers/create", function(req, res) {
//  Insert one 
// var queryString = `INSERT INTO ${table} (${cols}) VALUES (${printQuestionMarks(vals.length)});`;

// router.put("/:id", function(req, res) {
//  UPDATE 
// var queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;

// router.delete("/:id", function(req, res) {
// delete
//     var queryString = `DELETE FROM ${table} WHERE ${condition};`;

  // Get a specific customer
  app.get("/api/:customer", function(req, res) {

    if (req.params.customer) {
      Book.findAll({
        where: {
          title: req.params.customer
        }
      }).then(function(results) {
        res.json(results);
      });
    }

  });

  // Get all books of a specific genre
  app.get("/api/genre/:genre", function(req, res) {

    if (req.params.genre) {
      Book.findAll({
        where: {
          genre: req.params.genre
        }
      }).then(function(results) {
        res.json(results);
      });
    }

  });

  // Get all books from a specific author
  app.get("/api/author/:author", function(req, res) {

    if (req.params.author) {
      Book.findAll({
        where: {
          author: req.params.author
        }
      }).then(function(results) {
        res.json(results);
      });
    }

  });

  // Get all "long" books (books 300 pages or more)
  app.get("/api/books/long", function(req, res) {

    Book.findAll({
      where: {
        pages: {
          $gte: 300
        }
      },
      order: "pages DESC"
    }).then(function(results) {
      res.json(results);
    });

  });

  // Get all "short" books (books 150 pages or less)
  app.get("/api/books/short", function(req, res) {

    Book.findAll({
      where: {
        pages: {
          $lte: 150
        }
      },
      order: "pages ASC"
    }).then(function(results) {
      res.json(results);
    });

  });

  // Add a book
  app.post("/api/new", function(req, res) {

    console.log("Book Data:");
    console.log(req.body);
    Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      pages: req.body.pages
    });

  });

  // Delete a book
  app.post("/api/delete", function(req, res) {

    console.log("Book Data:");
    console.log(req.body);
    Book.destroy({
      where: {
        id: req.body.id
      }
    });

  });

};
