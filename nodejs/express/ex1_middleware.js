let express = require('express');
let app = express();
let fs = require('fs');

app.use(function (request, response, next) {
    var url = request.url;
    var date = new Date();
    var today = date.getDate() + '/' + date.getMonth() + '/' + date.getYear();
    var time = date.getHours() + ':' + date.getMinutes();
    var filecontent = `url = ${url}, Date = ${today}, Time = ${time} \n`;
    let filename = 'access.txt';
    fs.appendFile(filename, filecontent, function (error) {
        if (error != null) {
            console.log('file could not be created');
        }
        else {
            console.log('file created');
        }
    });
    console.log(url,today,time);
    next();
});

app.get('/home', function (req, res) {
    res.send('Request receive from home page');
});

app.get('/product', function (req, res) {
    res.send('Request receive from product page');
});

app.get('/contact', function (req, res) {
    res.send('Request receive from contact');
});

app.get('/about', function (req, res) {
    res.send('Request receive from about page');
});

app.get('/blog', function (req, res) {
    res.send('Request receive from blog page');
});

app.listen(5000);
console.log('server is ready');