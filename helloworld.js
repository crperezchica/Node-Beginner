console.log("Hello World");

//Since Node.js is single threaded this would slow our app querying the database
//Synchronous: 1st-query the database AFTER DONE 2nd- write to console
// var result = database.query("SELECT * FROM hugetable");
// console.log("Hello World");

// //To prevent above, instead of expecting database query to return a result
// //we pass an anonymous function as a second parameter
// database.query("SELECT * FROM hugetable", function(rows) {
//   var result = rows;
// })
// console.log("Hello World");