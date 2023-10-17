// http 서버를 만들기 위해 내장 모듈인 http를 가져오기(import)하였다
const http = require('http');
// readFile을 하기 위한 모듈 파일 시스템을 import 했다 
const fs = require('fs');

const contenType = require('./mod/contenType.js');
console.log(contenType);

let server = http.createServer(function(request, response){
  console.log(request.method)
  console.log(request.url);

  if (request.url === "/" && request.method === "GET") {
    fs.readFile("index.html", function(err, data){
      if (err) {
        console.error('파일을 읽지 못했습니다');
      } else {
        response.writeHead(200, contenType);
        response.end(data);
        response.write('test')
      }
    })
  }
  
  if (request.url === "/hos" && request.method === "GET"){
    fs.readFile("hos.html", function(err, data){
      if (err) {
        console.error('파일을 읽지 못했습니다');
      } else {
        response.writeHead(200, contenType);
        response.end(data);
      }
    })
  }
});

server.listen(8080, function(){
  console.log('서버 가동중 끄려면 Ctrl + C를 누르세요')
})