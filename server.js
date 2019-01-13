
var http = require('http');
var url = require('url'); // created to distinguish requests based on the URL path requested

function start(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        request.setEncoding("utf8"); //expecting encoding of received data to be utf8

        //called when a new chunk of data was received 
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Recieved POST data chunk ' "+
            postDataChunk + "'. ");
        });

        //called when all chunks of data have been recieved
        request.addListener("end", function() {
            route(handle, pathname, response, postData);
        });
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

exports.start = start;

