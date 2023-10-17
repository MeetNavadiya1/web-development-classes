function getDate()
{
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var fulldate = day + "/" + month + "/" + year;
    return fulldate;
}
function getTime()
{
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var fulltime = hour + "/" + minute + "/" + second;
    return fulltime;
}

module.exports.getTime = getTime;
module.exports.getDate = getDate;
