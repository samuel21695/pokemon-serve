const http = require('http');

const server = http.createServer(function(request, response) {
  console.log(request);
  // console.log(typeof(response));
})

server.listen(1234);