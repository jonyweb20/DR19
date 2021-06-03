function factory(num1) {
    let i = 1;
    let sim = 1;
    while (i <= num1) {
        sim *= i;
        i++;
        return sim;
    }  
}
 let out1 = document.querySelector(`#out1`);
 let userValue = document.getElementById(`n1`);
factory(userValue);
document.getElementById(`out1`).innerHTML = factory;