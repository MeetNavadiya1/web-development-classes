let http = require('http');
let my = require('./localmodual_1');
let server = http.createServer(function(request,response){
    console.log("I got your request...");
    console.log(my.getDate());
    console.log(my.getTime());
});
server.listen(5000);
console.log("server is running on port 5000");