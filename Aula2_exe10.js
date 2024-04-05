let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let divisiveisPor3 = numeros.filter(numero => numero % 3 === 0);

let quadrados = divisiveisPor3.map(numero => numero * numero);

console.log("Números divisíveis por 3:", divisiveisPor3);
console.log("Quadrados dos números divisíveis por 3:", quadrados);