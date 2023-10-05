const http = require('http');

const server = http.createServer(function(request, response) {
  console.log(request.url);
})

server.listen(1234);