let http = require('http');
let server = http.createServer(function(request,response)
{
    console.log("I got your request..");
});
var port = 5000;
server.listen(port);
