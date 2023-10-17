const dockMaker = require('./mod/dockMaker.js');
const fs = require('fs');
const readHtml =  fs.readFile('index.html', function(err, data) {
  if(err){
    console.log('error');
  } else{
  response.log(data);
  }
})
// http 서버를 만들기 위해 내장 모듈인 http를 가져오기(import)하였다
const http = require('http');
const fs = require('fs');

const contenType = require('./mod/contenType.js');
console.log(contenType);

let server = http.createServer(function(request, response){
  console.log(request.method);
  console.log(request.url);
  readHtml
  response.writeHead(200, contenType);
  response.end((dockMaker('test', 'notion.so', 'notion')));

});

server.listen(1234, function(){
  console.log('서버 가동중 끄려면 Ctrl + C를 누르세요')
})