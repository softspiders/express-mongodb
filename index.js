var express = require("express");

var app = express();

app.get("/", function(req, res) {

  const MongoClient = require("mongodb").MongoClient;
  const uri = "mongodb+srv://AlexanderLapygin:123@mymongo-nadvm.mongodb.net/test?retryWrites=true";
  
  MongoClient.connect(uri, function(err) {
    if (err) {
      res.send(err);
    } else {
      res.send("Connected success");
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function() {});

console.log("Server running at http://localhost:%d", port);
