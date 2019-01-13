var server = require('./server');
var router = require('./router');
var requestHandlers = require("./requestHandlers");

//object of request hanlders
//map of different URLs to different handlers
var handler = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route,handle);