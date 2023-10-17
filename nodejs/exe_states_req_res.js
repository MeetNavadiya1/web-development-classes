var http = require('http');
var server = http.createServer(function(request,response){
    let url = request.url;
    console.log("request got of url : " + url);
    response.writeHead(200, {'Content-Type': 'text/html'});
    let output = '';
    if(url === '/gujarat')
    {
        output = '<h1>gujarat</h1>';
        output += '<ul>';
        output += '<li>bhavnagar</li>';
        output += '<li>surat</li>';
        output += '<li>ahmedabad</li>';
        output += '<li>mahesana</li>';
        output += '<li>rajkot</li>';
        output += '</ul>';
    }
    else if(url === '/rajasthan')
    {
        output = '<h1>rajasthan</h1>';
        output += '<ul>';
        output += '<li>jaipur</li>';
        output += '<li>jothpur</li>';
        output += '<li>udaipur</li>';
        output += '<li>kota</li>';
        output += '<li>ajmer</li>';
        output += '</ul>';
    }
    else if(url === '/maharastra')
    {
        output = '<h1>maharastra</h1>';
        output += '<ul>';
        output += '<li>mumbai</li>';
        output += '<li>pune</li>';
        output += '<li>nagpur</li>';
        output += '<li>nashik</li>';
        output += '<li>aurangabad</li>';
        output += '</ul>';
    }
    else if(url === '/karnataka')
    {
        output = '<h1>karnataka</h1>';
        output += '<ul>';
        output += '<li>bengaluru</li>';
        output += '<li>mysore</li>';
        output += '<li>hubli-dharwad</li>';
        output += '<li>mangalore</li>';
        output += '<li>gulbarga</li>';
        output += '</ul>';
    }
    else if(url === '/punjab')
    {
        output = '<h1>punjab</h1>';
        output += '<ul>';
        output += '<li>amritsar</li>';
        output += '<li>ludhiyana</li>';
        output += '<li>jalandar</li>';
        output += '<li>chandigadh</li>';
        output += '<li>patiyala</li>';
        output += '</ul>';
    }
    else
    {
        output = '404 page not found';
    }
    response.write(output);
    response.end();
});

server.listen(5000);
console.log('server startes on port 5000')