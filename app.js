const http = require('http');

const server = http.createServer(function(request, response) {
  console.log(request.url);
  if(request.url === "/") {
    response.writeHead(200, {"Content-type": "text/html"});

    let doc =`<html> <head> </head> <body> <h1> Welcome! You entered to a main page. </h1> </body> </html>`

    response.end(doc)
    
  }
  if(request.url === "/serve") {

    response.writeHead(200, {"Content-type": "text/html"});

    let doc =`<html> <head> </head> <body> <h1> Welcome! You are in the sub page. </h1> </body> </html>`

    response.end(doc)
  }
})

server.listen(1234);