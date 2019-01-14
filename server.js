
// var formidable = require('formidable'),
var http = require('http');
// sys = require('sys');
var url = require('url'); // created to distinguish requests based on the URL path requested

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    // console.log('Request for ' + pathname + ' received.');
    route(handle, pathname, response, request);
  }
  http.createServer(onRequest).listen(8888);
//   console.log('Server has started.');
}
exports.start = start;

