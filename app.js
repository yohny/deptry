var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from DepTry\n');
});

server.listen(process.env.PORT || 1337, function() {
  console.log('Server listening at %j', server.address());
});
