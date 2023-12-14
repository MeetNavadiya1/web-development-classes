var connection = require('./myconnection');

// create query
var sql = "insert into course (name,fees,detail,image,iscertified) values('node',1000,'back end development','node.jpg',1)";

connection.con.query(sql,function(error,result){
    if(error)
    {
        console.log(error.errno,error.errno,error.code);
    }
    else{
        console.log("no of rows inserted ", result.affectedRows);
        console.log("Inserted row id ",result.insertId);
    }
    connection.con.end();
});