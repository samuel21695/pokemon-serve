const http = require('http');
const { setTimeout } = require('timers/promises');

const server = http.createServer(function(request, response) {
  console.log(request.url);
  if(request.url === "/") {
    setTimeout(function() {
      response.writeHead(200, {"Content-type": "text/html"});
      
      let doc =`<html> <head> </head> <body> <h1> Welcome! You are no longer in a main page. </h1> </body> </html>`

      response.end(doc)
    }, 50);
  }


  if(request.url === "/serve") {

    response.writeHead(200, {"Content-type": "text/html"});

    let doc =`<html> <head> </head> <body> <h1> Welcome! You are in the sub page. </h1> 
    <a href="http://localhost:1234/">move to a main page</a> </body> </html>`

    response.end(doc)
  }
})

server.listen(1234);