// ********************************************************************************************
//	server.js - the Initial starting point for the Node/Express server.
// ********************************************************************************************
//  Dependencies 
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

//  Burger model is required
var db = require("./models");

//  Set up for the Express App
var app = express();

//  const port is necessary for Heroku deployment
const PORT = process.env.PORT || 3000;

// Set up for the Express app to handle data parsing
// Parses the text as JSON and exposes the resulting object on req.body.
//app.use(bodyParser.json());  //?

//  bodyParser.urlencoded parses the text as URL encoded data (which is how browsers tend to 
//  send form data from regular forms set to POST) and exposes the resulting object 
//  (containing the keys and values) on req.body. For comparison; in PHP all of this 
//  is automatically done and exposed in $_POST.
//  extended: allows to choose between parsing the urlencoded data with the querystring 
//  library (when false) or the qs library (when true)
app.use(bodyParser.urlencoded({ extended: true }));
//  bodyParser.text() reads the buffer as plain text and exposes the resulting string on req.body.
//app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static(__dirname + "/public"));
app.use(express.static(process.cwd() + "/public"));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
//var routes = require("./controllers/burgers_controller.js");
require("./controllers/burgers_controller")(app);

//app.use("/", routes);

// Require route files
// =============================================================
//require("./app/routes/burger-routes.js")(app);
//require("./app/routes/customer-api-routes.js")(app);
//require("./app/routes/api-routes.js")(app);
//require("./app/routes/html-routes.js")(app);


//  *** used for testing, but not for production
// Starts the server to begin listening
// =============================================================

db.sequelize.sync({ force: false }).then(function() {
	app.listen(PORT, function() {
	  console.log("App listening on PORT " + PORT);
	});
});

// This will run .sync() only if database name ends with '_test'
// db.sequelize.sync({ force: true, match: /_test$/}).then(function() {
// 	app.listen(PORT, function() {
// 	  console.log("App listening on PORT " + PORT);
// 	});
// });

//  Used for production
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// })
