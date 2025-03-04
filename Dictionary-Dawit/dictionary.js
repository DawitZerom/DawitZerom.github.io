var express = require("express");
var bodyParser = require("body-parser"); // for parssing the body
var path = require("path"); // module used for working with path related stuff
var search = require("./word");

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

// This is the home page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dictionary.html"));
});

// This is the search page
app.post("/search", function (req, res) {
  search.wordMeaning(res, req.body.searchTerm);
});

var server = app.listen(8050, function () {
  console.log("Server is running on port 8050...");
});
