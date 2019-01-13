
//Checking to see if request handler for the given pathname exists, if it does it calls the according function
function route(handle, pathname) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname] ();
  } else {
    console.log("No request handler found for " + pathname);
  }
}

// exports.route = route;
module.exports = route;