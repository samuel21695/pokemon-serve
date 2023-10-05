const http = require('http');

const server = http.createServer(function(request, response) {
  // console.log(request);
  console.log(typeof(response));
  response.writeHead(200, {"Content-type": "text/html"});
  response.end("안녕!")
})

server.listen(1234);