let $ = (id) => document.getElementById(id);
// function $(id){
//     return document.getElementById(id);
// }

let getSimpleInterest = (amount, rate=10, year=1) =>{
    let interest = (amount * rate * year) / 100;
    return interest;
}