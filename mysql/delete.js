var connection = require('./myconnection');

sql = 'delete from course where id=3';

connection.con.query(sql,function(error,result){
    if(error)
    {
        console.log(error.code,error.errno,error.message);
    }
    else
    {
        console.log('no of rows affected : ',result.affectedRows);
    }
});