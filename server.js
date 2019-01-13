
var http = require('http');
var url = require('url'); // created to distinguish requests based on the URL path requested

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(handle, pathname, response);
        
        // var content = route(handle, pathname);
        // response.writeHead(200, {"Content-Type": "text/plain"}); //when request recieved sends an HTTP status and content-type in the HTTP response header
        // response.write(content); // function sends text in the HTTP respone body
        // response.end();//to finish response
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

exports.start = start;

