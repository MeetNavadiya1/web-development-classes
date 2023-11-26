var http = require('http');
var my = require('./ex1_local_module')
var server = http.createServer(function(request,response){
    console.log('I got request');
    console.log(my.getSquare(5));
    console.log(my.getQube(5));
    console.log(my.getPower(5,4));
}); 
server.listen(5000);
console.log('server is running')