let GenerateTable = function(){
    // alert("form submmited")
    let row = document.getElementById('row').value;
    let column = document.getElementById('column').value;
    let name = document.getElementById('name').value;
    let loop = document.querySelector("input[name='loop']:checked").value;
    loop = parseInt(loop);
    console.log(row,column,name,loop);
    var output = document.getElementById('output');
    var temp = '';

    //decision making system
    if(loop === 1)
    {
        console.log("Do While Loop");
        let i = 1;
        do
        {
            temp = temp + '<tr>';
            let j = 1;
            do
            {
           
                temp = temp + `<td>${name}</td>`;
                j++;
            }
            while(j<=column);
            i++;
        }
        while(i<=row);
        console.log(temp);
        output.innerHTML = temp;
    }
    else if(loop === 3)
    {
        console.log("While Loop");
        var i = 1;
        while(i<=row)
        {
            temp = temp + '<tr>';
            let j=1;
            while(j<=column)
            {
                temp = temp + `<td>${name}</td>`;
                j++;
            }
            i++;
        }
        console.log(temp);
        output.innerHTML = temp;
    }
    else if(loop === 2)
    {
        console.log("For Loop");
        for(let i = 1; i<=row; i++)
        {
            temp = temp + '<tr>';
            for(let j=1; j<=column; j++)
            {
                temp = temp + `<td>${name}</td>`;
            }
        }
        console.log(temp);
        output.innerHTML = temp;
    }
    return false;
}