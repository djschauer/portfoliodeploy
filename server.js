var express = require("express");
var bodyParser = require("body-parser");
var html = require("./htmlRoutes");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

html.getHome(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });