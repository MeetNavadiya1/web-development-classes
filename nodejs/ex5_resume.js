var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    fs.readFile('resume.html', function(error,FileContent){
        if(error != null)
        {
            response.write("File cannot be open");
        }
        else{
            response.write(FileContent);
        }
        response.end();
    });
}); 
server.listen(5000);
console.log('server is running');