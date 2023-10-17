var http = require('http');
var server = http.createServer(function(request,response){
    let url = request.url;
    console.log("request got of url : " + url);
    response.writeHead(200, {'Content-Type': 'text/html'});
    let output = '';
    if(url === '/fruits') {
        output = '<h1>Fruits</h1>';
        output += '<ul>';
        output += '<li>Apple</li>';
        output += '<li>Banana</li>';
        output += '<li>Orange</li>';
        output += '</ul>';
    }
    else if(url === '/vegetables') {
        output = '<h1>Vegetables</h1>';
        output += '<ul>';
        output += '<li>Carrot</li>';
        output += '<li>Tomato</li>';
        output += '<li>Onion</li>';
        output += '</ul>';
    }
    else if(url === '/grains') {
        output = '<h1>Grains</h1>';
        output += '<ul>';
        output += '<li>Rice</li>';
        output += '<li>Wheat</li>';
        output += '<li>Barley</li>';
        output += '</ul>';
    }
    else {
        output = '<h1>404 Page Not Found</h1>';
    }
    response.write(output);
    response.end();
});

server.listen(5000);
console.log('server startes on port 5000')