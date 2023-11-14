const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response) {
  console.log(request.url);
  if(request.url === "/") {
    response.writeHead(200, {"Content-type": "text/html"});

    fs.readFile("./main.html", function(err, data) {
      if (err) {
        console.error('파일을 읽지 못했습니다.');
      } else {
        response.end(data)
      }
    })
  }
  if(request.url === "/serve") {

    fs.readFile("./sub.html", function(err, data) {
      if (err) {
        console.error('파일을 읽지 못했습니다.');
      } else {
        response.end(data)
      }
    })
  }
})

server.listen(1234);