const http = require("http");
function callBackBody(body1, body2, movepage, movepagetext){
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
  h1{
    width:200px;
    height:200px;
    background-color: grey;
  }
  .fadeout-animate{
    animation: fadeout-animate 2s forwards;
  }
  @keyframes fadeout-animate{
    from{opacity:1;}
    to{opacity:1; transform: translateX(100px)}
  }
  </style>
</head>
<body>
  <h1 id="animation">${body1}</h1>
  <h2>${body2}</h2>
  <a href="http://localhost:8000/${movepage}">${movepagetext}</a>
  <script>
  h1 = document.getElementById("animation")
  h1.addEventListener("click",function(){
    setTimeout(function(){
      h1.classList.add("fadeout-animate");
    },1000)
    setTimeout(function(){
      h1.remove()
    },5000)
  })
  </script>
</body>
</html>`
}
function htmlBody(body1,body2,movepage,movepagetext,callback){
  return callback(body1,body2,movepage,movepagetext)
}
// let makeHtmlBody = callBackBody("안녕하세요2","잘가세요",htmlBody)
// console.log(makeHtmlBody)
const server = http.createServer(function(request,response){
  if(request.url === "/"){
  response.writeHead(200,{"Content-Type":"text/html"})
  let first = htmlBody("안녕하세요1","잘가세요","second","다음페이지",callBackBody)
  response.end(first)
  }
  if(request.url === "/second"){
  response.writeHead(200,{"Content-Type":"text/html"})
  let second = htmlBody("안녕하세요2","잘가세요","third","다음페이지",callBackBody)
  response.end(second)
  }
  if(request.url ==="/third"){
  response.writeHead(200,{"Content-Type":"text/html"})
  let third = htmlBody("안녕하세요3","잘가세요","","메인으로",callBackBody)
  response.end(third)
  }
})
server.listen(8000)