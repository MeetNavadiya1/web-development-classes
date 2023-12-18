var express = require('express');
var app = express();
var connection = require('./myconnection2');
app.use(express.urlencoded({ extended: true }));

//used to register as users 
//url = http://localhost:5000/users
//method = post
//input : email,password,mobile (all input is required)
app.post("/users", function (request, response) {
    let email = request.body.email;
    let password = request.body.password;
    let mobile = request.body.mobile;
    if (email === undefined || password === undefined || mobile === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        let sql = `select id from users where email='${email}' or mobile='${mobile}'`;
        connection.con.query(sql, function (error, result) {
            if (error != null) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                var size = result.length;
                if (size >= 1) {
                    //email or mobile found
                    response.json([{ 'error': 'no error' }, { 'success': 'no' }, { 'message': 'email or mobile is allready registerd with us' }]);
                }
                else {
                    sql = `insert into users (email,password,mobile) values ('${email}','${password}','${mobile}')`;
                    connection.con.query(sql, function (error, result) {
                        if (error != null) {
                            response.json([{ 'error': 'error occured' }]);
                        }
                        else {
                            response.json([{ 'error': 'no error' }, { 'success': 'yes' }, { 'message': 'user registerd successfully' }]);
                        }
                    });
                }
            }
        });
    }
});

app.post('/login',function(request,response){
    let email = request.body.email;
    let password = request.body.password;

    if(email === undefined || password === undefined)
    {
        response.json([{'error ':'input is missing'}])
    }
    else
    {
        let sql = `select id from users where email='${email}' and password='${password}'`;
        connection.con.query(sql,function(error,result){
            if(error)
            {
                response.json([{'error ':'error occured'}]);
            }
            else
            {
                let size = result.length;
                if(size == 0)
                {
                    response.json([{'error ':'no error'},{'success ':'no'},{'message ':'invalid username/password'}]);
                }
                else
                {
                    response.json([{'error ':'no error'},{'success ':'yes'},{'message ':'login successfully'},{'id ':result[0]['id']}]);
                }
            }
        });
    }
});

app.listen(5000);
console.log('ready to accept request');