var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response)
 {
  response.send(fs.readFileSync("./index.html").toString());
 });

var oneDay = 864000000;

app.use(express.compress());

app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log("Listening on " + port);
});
