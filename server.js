
// var formidable = require('formidable'),
var http = require('http');
    // sys = require('sys');
var url = require('url'); // created to distinguish requests based on the URL path requested

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, response, request);
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

// http.createServer(function(req,res) {
//     if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
//         //parse a file upload
//         var form = new formidable.IncomingForm();
//         form.parse(req, function(error, fields, files) {
//             res.writeHead(200, {'content-type': 'text/plain'});
//             res.write('recieved upload:\n\n');
//             res.end(sys.inspect({fields: fields, files: files}));
//         });
//         return;
//     }
//     //show a file upload form
//     res.writeHead(200, {'content-type': 'text/html'});
//     res.end(
//         '<form action="/upload" enctype="multipart/form-data" '+
//         'method="post">'+
//         '<input type="text" name="title"><br>'+
//         '<input type="file" name="upload" multiple="multiple"><br> '+
//         '<input type="submit" value="Upload">'+
//         '</form>'
//     );
// }).listen(8888);



// // function start(route, handle) {
// //     function onRequest(request, response) {
// //         var postData = "";
// //         var pathname = url.parse(request.url).pathname;
// //         console.log("Request for " + pathname + " received.");

// //         request.setEncoding("utf8"); //expecting encoding of received data to be utf8

// //         //called when a new chunk of data was received 
// //         request.addListener("data", function(postDataChunk) {
// //             postData += postDataChunk;
// //             console.log("Recieved POST data chunk ' "+
// //             postDataChunk + "'. ");
// //         });

// //         //called when all chunks of data have been recieved
// //         request.addListener("end", function() {
// //             route(handle, pathname, response, postData);
// //         });
// //     }
// //     http.createServer(onRequest).listen(8888);
// //     console.log("Server has started");
// // }

exports.start = start;

