var connect = require('connect');
var port = 8080;

connect.createServer(connect.static(__dirname)).listen(port);
console.log('web server started on port %d ...', port);
