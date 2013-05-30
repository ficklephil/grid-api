// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');
//PS YOU WILL NEED https://github.com/mikeal/request.git which is a HTTP Request libary for Node so 
///that it will make dev faster use npm install request
var request = require('request');
request('http://api.nestoria.co.uk/api?action=echo&encoding=json&parameter=value', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})