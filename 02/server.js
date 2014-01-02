var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/process', function(req, res){
  console.log(req.query.n);
  var body = 'OK';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.end(body);
});

app.listen(8080);
console.log('Listening on port 8080');

