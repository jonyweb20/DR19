function factory() {
    let i = 1, userValue, sim = 1;
    let out1 = document.querySelector(`#out1`);
    userValue = document.getElementById(`n1`).value;
    while (i <= userValue) {
        sim *= i;
        i++;
        document.getElementById(`out1`).innerHTML = sim;
    }
}

    function numberRow (){
    let arr =[];
        userValue1 = document.getElementById(`n2`).value;
        userValue2 = document.getElementById(`n3`).value;
        let out2 = document.querySelector(`#out2`);
    for (i = 0; userValue1 <= userValue2; i++ ){
    arr[i] = userValue1;
    ++userValue1;
}
    document.getElementById(`out2`).innerHTML += arr;
    return numberRevRow (arr);
}

function numberRevRow (numberRow){
    let out3 = document.querySelector(`#out3`);
    numberRow.reverse();
    document.getElementById(`out3`).innerHTML += numberRow;
}


function valueRow(){
    let out4 = document.querySelector(`#out4`);
    let userValue3 = document.getElementById(`n4`).value;
    let digits = userValue3.toString().split(``).map(Number).reverse().join(``);
    document.getElementById(`out4`).innerHTML += digits;
}

function sumRow(){
    let out5 = document.querySelector(`#out5`);
    let userValue4 = [document.getElementById(`n5`).value];
    let digits = userValue4.toString().split(``).map(Number).map(i=>x+=i, x = 0).reverse()[0];
    document.getElementById(`out5`).innerHTML += digits;
}
function sumRowClear(){
    document.getElementById("n5").value = "";
    document.getElementById(`out5`).innerHTML = '';
}

function roundBracket() {
    let userValue4 = 0;
    let out6 = document.querySelector(`#out6`);
    userValue4 = document.getElementById(`n6`).value;
    function roundB(userValue4){
        let sum = ``;
        if(userValue4 > 0) {
             sum = (`(` + roundB(userValue4-1) + `)`);
        }
        return sum;
    }
    document.getElementById(`out6`).innerHTML += roundB(userValue4);
}

function roundBracketClear(){
    document.getElementById("n6").value = "";
    document.getElementById(`out6`).innerHTML = '';
}







