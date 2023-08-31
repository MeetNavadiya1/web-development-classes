let GenerateTable = function(){
    // alert("form submmited")
    let row = $('row').value;
    let column = $('column').value;
    let name = $('name').value;
    let loop = document.querySelector("input[name='loop']:checked").value;
    loop = parseInt(loop);
    console.log(row,column,name,loop);
    let output = $('output');
    let temp = '';

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
            temp = temp + '</tr>';
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
            temp = temp + '</tr>';
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
            temp = temp + '</tr>';
        }
        console.log(temp);
        output.innerHTML = temp;
    }
    return false;
}