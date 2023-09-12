function GetTable() {
    let start = $('start').value;
    let end = $('end').value;
    let output = $('cards');
    start = parseInt(start);
    end = parseInt(end);
    let temp = '';
    let m = '';
    for (let i = start; i <= end; i++) {
        m = 1;
        temp += '<div class="col-lg-3 col-md-4 col-sm-6 col-12">';
        temp += '<div class="card w-75 mt-4 m-auto">';
        temp += '<table class="table table-striped ">'; 
        for (let j = 1; j <= 9; j++) {
            temp += '<tr>';
            temp += '<td>';
            temp += i + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
            temp += m + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
            let mul = i * m;
            temp += mul;
            temp += '<br>';
            if (j == 9) {
                temp += '<tr>';
                temp += '<td>';
                m = 10;
                let mul = i * m;
                temp += i + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
                temp += m + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
                temp += mul;
                temp += '</td>';
                temp += '</tr>';
            }
            m++;
            temp += '</td>';
            temp += '</tr>';
        }
        temp += '</table>';
        temp += '</div>';
        temp += '</div>';
        output.innerHTML = temp;
    }
    return false;
}
