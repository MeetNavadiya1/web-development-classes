function getSquare(num)
{
    var square = num * num;
    return square;
}

function getQube(num)
{
    var qube = num * num * num;
    return qube;
}

function getPower(base,exponent)
{
    var result = 1;
    for(let i=0; i<exponent; i++)
    {
        result *= base;
    }
    return result;
}

module.exports.getSquare = getSquare;
module.exports.getQube = getQube;
module.exports.getPower = getPower;
