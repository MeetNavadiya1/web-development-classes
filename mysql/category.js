// retrive connection file of database
var connection = require('./myconnection2');

// retrive express module and assign express object to app
var express = require('express');
var app = express();

// middleware
app.use(express.urlencoded({ extended: true }));

// purpose : used to get all category
// url : http://localhost:5000/category
// method : get
// input : none
app.get('/category', function (request, response) {
    let sql = "select id,title,photo from category order by id desc";
    connection.con.query(sql, function (error, result) {
        if (error) {
            response.json([{ 'error ': ' error occured' }]);
        }
        else {
            var size = result.length;
            result.unshift({ 'total ': size });
            result.unshift({ 'error ': 'no' });
            var output = JSON.parse(JSON.stringify(result));
            response.send(output);
        }

    });
});


// purpose : used to get records of specific id
// url : http://localhost:5000/category/10
// method : get
// input : category's id
app.get('/category/:id', function (request, response) {
    let id = request.params.id;
    let sql = `select * from category where id = ${id}`;
    connection.con.query(sql, function (error, result) {
        if (error) {
            response.json([{ 'error ': 'error occured' }]);
        }
        else {
            let size = result.length;
            result.unshift({ 'total ': size });
            result.unshift({ 'error ': 'no' });
            var output = JSON.parse(JSON.stringify(result));
            response.send(output);
        }
    });
});


// purpose : used to delete category base on given id
// url : http://localhost:5000/category/9
// method : delete
// input : category's id
app.delete('/category/:id', function (request, response) {
    let id = request.params.id;
    let sql = `delete from category where id = ${id}`;
    connection.con.query(sql, function (error, result) {
        if (error) {
            response.json([{ 'error ': 'error occured' }]);
        }
        else {
            response.json([{ 'error ': 'error occured' }, { 'message ': 'category deleted' }]);
        }
    });
});


// purpose = used to insert data
// url = http://localhost:5000/category
// method = post
// input = title,photo,islive,isdeleted
app.post('/category', function (request, response) {
    let title = request.body.title;
    let photo = request.body.photo;
    let islive = request.body.islive;
    let isdeleted = request.body.isdeleted;

    if (title === undefined || photo === undefined || islive === undefined || isdeleted === undefined) {
        response.json([{ 'error ': 'input is missing' }]);
    }
    else {
        let sql = `insert into category (title,photo,islive,isdeleted) values('${title}','${photo}','${islive}','${isdeleted}');`
        connection.con.query(sql, function (error, result) {
            if (error) {
                response.json([{ 'error ': 'error occured' }]);
            }
            else {
                response.json([{ 'error ': 'no error' }, { 'message ': 'product inserted' }]);
            }
        });
    }
});


// purpose = used to update the row
// url = http://localhost:5000/category
// method = put
// input = title,photo,islive,isdeleted,id
app.put('/category',function(request,response){
    let title = request.body.title;
    let photo = request.body.photo;
    let islive = request.body.islive;
    let isdeleted = request.body.isdeleted;
    let id = request.body.id;

    if(title === undefined || photo === undefined || islive === undefined || isdeleted === undefined || id === undefined)
    {
        response.json([{'error ':'error occured'}]);
    }
    else
    {
        let sql = `update category set title='${title}',photo='${photo}',islive='${islive}',isdeleted='${isdeleted}' where id='${id}'`;
        connection.con.query(sql,function(error,result){
            if(error)
            {
                response.json([{'error ': 'error occured'}]);
            }
            else
            {
                response.json([{'error ':'no error'},{'message ':'row updated'}]);
            }
        });
    }
});

app.listen(5000);
console.log('ready accept request');