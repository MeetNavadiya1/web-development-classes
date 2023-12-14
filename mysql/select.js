var connection = require('./myconnection');

sql = 'select id,image,detail from course';

connection.con.query(sql,function(error,result){
    if(error)
    {
        console.log(error.code,error.errno,error.message);
    }
    else
    {
        let size = result.length;
        for (let temp=0; temp<size; temp++)
        {
            console.log('id = ',result[temp].id,'image = ',result[temp].image,'detail = ',result[temp].detail);
        }
    }
});