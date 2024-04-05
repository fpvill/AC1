
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let numerosPares = numeros.filter(numero => numero % 2 === 0);


let dobros = numerosPares.map(numero => numero * 2);


console.log("Números pares:", numerosPares);
console.log("Dobro dos números pares:", dobros);
