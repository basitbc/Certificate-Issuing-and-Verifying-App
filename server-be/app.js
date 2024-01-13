var express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');

// Create an Express application
var app = express();

// Define port 
var port = process.env.PORT || 9000;


const  response  = require("./common/utils");

// Configure CORS handling
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma"
    );
    next();
  });
  
  // Handling CORS pre-flight requests
  app.options("*", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma"
    );
    res.sendStatus(200);
  });

  // Middleware to parse JSON in the request body
app.use(bodyParser.json());
  
 // Routes setup
 app.use(require("./routes"));

   // Catch 404 and forward to error handler
   app.use(function (req, res, next) {
    return res.status(404).jsonp(response(false, {}, "Api not found"));
  });

  // Error handler
  app.use(function (err, req, res, next) {
    console.log(err);
    return res.status(500).jsonp(response(false, {}, err.message));
  });

// Define a route for the root URL ("/") that responds with "Hello World!"
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Start the server and make it listen on port 3000
app.listen(port, function () {
  // Callback function executed once the server is running
  console.log(`Application listening on port ${port}`);
});
