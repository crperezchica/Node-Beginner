//requires http module thru node.js and makes it avaiable through variable http
var http = require("http");

//createServer is a function call that http module offers
//function returns an object and this object has a method named .listen
//passing an anonymous function
http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888); //.listen(portnumber) HTTP server is going to listen on

//Another option to start server 
// var http = require("http");

// var server = http.createServer();
// server.listen(8888);

//when callback fires and onRequest() function gets triggered two parameters passed into it: request and response
//request and response are objects 
//-> use their methods to handle the details of the HTTP request and respond to request
// function onRequest(request,response) {
//     console.log("Request recieved.");
//     response.writeHead(200, {"Content-Type": "text/plain"}); //when request recieved sends an HTTP status and content-type in the HTTP response header
//     response.write("Hello World"); // function sends text in the HTTP respone body
//     response.end();//to finish response
// }

// http.createServer(onRequest).listen(5000);
// console.log("server has started");