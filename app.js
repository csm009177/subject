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
        response.write('test'); 
        response.end(data);
        // test는 어디에 출력되는 걸까? test로 단일 write일 때는 출력이 된다
        // answer end 뒤쪽에 있으면 끝나고 내보내기 때문에 안나옴
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

let PORT = 2020 // 서버 포트를 입력 받음
server.listen(`${PORT}`, function(){
  console.log(`서버 가동중 끄려면 Ctrl + C를 누르세요
cli 창에서 컨트롤 누른후  옆에 포트 누르면 편리하게 확인 -> http://localhost:${PORT}/`);
})