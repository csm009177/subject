// import hypertext protocal
const http = require('http');
// import file systme module
const fs = require('fs');

// import custom contenType
let contenType = require('./mod/contenType.js');
// import custom dockMaker
let dockMaker = require('./mod/dockMaker.js');

let server = http.createServer(function (req, res){
  // docMaker(title, href, text)
  let main = dockMaker('sea', 'hospital', 'sea')
})