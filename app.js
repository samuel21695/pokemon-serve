const http = require('http');

const server = http.createServer(function(request, response) {
  console.log(request.url);
  if(request.url === "/") {
    console.log("메인입니다.")
  }
  if(request.url === "/serve")
    console.log("서브입니다.")
})

server.listen(1234);