var http = require("http");
var server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'application/json'});
    var akash = {
        name : "akash",
        surname : "goti",
        gender : "male",
        email : "akash@gmail.com"
    }
    var sahil = {
        name : "sahil",
        surname : "zazadiya",
        gender : "male",
        email : "sahil123@gmail.com"
    }
    var jay = {
        name : "jay",
        surname : "goti",
        gender : "male",
        email : "jay7373@gmail.com"
    }
    var namik = {
        name : "namik",
        surname : "gujarati",
        gender : "male",
        email : "gujarati1209@gmail.com"
    }
    var dev = {
        name : "dev",
        surname : "sutariya",
        gender : "male",
        email : "dev909@gmail.com"
    }
    var course = [akash,sahil,jay,namik,dev];
    var data = JSON.stringify(course);
    response.write(data);
    response.end();
}); 
server.listen(5000);
console.log("Server running 5000");