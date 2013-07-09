var express = require('express');
var fs = require('fs')
buf = new Buffer(256);
len = buf.write('\u00bd + \u00bc = \u00be', 0);
console.log(len + " bytes: " + buf.toString('utf8', 0, len));


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync("./index.html"))
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
