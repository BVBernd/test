var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var test = fs.readFileSync('index.html');
var text = test.toString();

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
