// ********************************************************************************************
//	server.js - the Initial starting point for the Node/Express server.
// ********************************************************************************************
//  Dependencies 
var express = require("express");
//var methodOverride = require("method-override");
var bodyParser = require("body-parser");

//  Sets up the Express App
var app = express();
//  const port is needed for Heroku deployment
const port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());

//  extended: allows to choose between parsing the urlencoded data with the querystring 
//  library (when false) or the qs library (when true)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
/*
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);


*/

// Require route files
// =============================================================
//require("./app/routes/burger-routes.js")(app);
//require("./app/routes/customer-api-routes.js")(app);
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);


//  *** used for testing, but not for production
// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
	app.listen(PORT, function() {
	  console.log("App listening on PORT " + PORT);
	});
});

//  Used for production
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// })
