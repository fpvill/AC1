function inverterString(str) {
    return str.split("").reverse().join("");
}

let stringOriginal = "Olá, mundo!";
let stringInvertida = inverterString(stringOriginal);
console.log(stringInvertida);