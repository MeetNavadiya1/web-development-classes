var connection = require('./myconnection');

sql = "update course set image='next js',detail='another framework' where id=1";

connection.con.query(sql,function(error,result){
    if(error)
    {
        console.log(error.code,error.message,error.errno);
    }
    else
    {
        console.log('no of rows updated : ',result.affectedRows);    
    }
});