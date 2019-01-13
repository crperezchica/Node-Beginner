var requestHandlers = require("./router");

function start () {
  console.log("Request handler 'start' was called.");
}

function upload() {
  console.log("Request handler 'upload' was called.");
}

// exports.start = start;
// exports.upload = upload;
module.exports = start;
module.exports = upolaod;