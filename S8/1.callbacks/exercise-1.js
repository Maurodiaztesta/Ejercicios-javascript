const numbersList = [];

const sum  = (a, b) => {
    return a + b;
}

const substract = (a, b) => {
    return a - b;
}

const father = (a, b, op) =>{
    const resultado = op(a, b);
    numbersList.push(resultado);
}



(father(1, 2, sum));
(father(7, 2, substract));
(father(5, 3, sum));
(father(10, 5, substract));

console.log(numbersList);


