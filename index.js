var express = require("express");

var app = express();

app.get("/", function(req, res) {

  var MongoClient = require("mongodb").MongoClient;
  var uri = "YOUR_MONGODB_URL";
  
  MongoClient.connect(uri, function(err) {
    if (err) {
      res.send(err);
    } else {
      res.send("Connected success");
    }
  });
});

var port = process.env.PORT || 1337;
var server = app.listen(port, function() {});

console.log("Server running at http://localhost:%d", port);
