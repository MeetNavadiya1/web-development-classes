var http = require('http');
var my = require('./ex2_local_module');
var server = http.createServer(function(request,response){
    console.log(my.getAmountInWords(1234))
}); 
server.listen(5000);
console.log('server is running');