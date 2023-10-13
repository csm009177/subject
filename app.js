// http 서버를 만들기 위해 내장 모듈인 http를 가져오기(import)하였다
const http = require('http');
const fs = require('fs');

const contenType = {
  'Content-Type' : 'text/html',
  'charset' : 'utf-8',
}

http.createServer(function(request, response){
  console.log(request.method);
  console.log(request.url);
 
  response.writeHead(200, contenType);
  
  fs.readFile("index.html", function(err, data){
    if (err) {
      console.error('파일을 읽지 못했습니다');
    } else {
      response.end(data);
    }
  })
}).listen(1234);