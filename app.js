const http = require('http');

const server = http.createServer(function(request, response) {
  console.log(request.url);
  if(request.url === "/") {
    response.writeHead(200, {"Content-type": "text/html"});

    let doc =`<html> <head> </head> <body> <h1> 메인페이지입니다. </h1> </body> </html>`

    response.end(doc)
    
  }
  if(request.url === "/serve") {

    response.writeHead(200, {"Content-type": "text/html"});

    let doc =`<html> <head> </head> <body> <h1> 서브페이지입니다. </h1> </body> </html>`

    response.end(doc)
  }
})

server.listen(1234);