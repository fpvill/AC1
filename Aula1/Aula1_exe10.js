function ehPalindromo(str) {

    str = str.toLowerCase().replace(/\s/g, '');


    return str === str.split('').reverse().join('');
}


let string = "arara";
if (ehPalindromo(string)) {
    console.log("'" + string + "' é um palíndromo.");
} else {
    console.log("'" + string + "' não é um palíndromo.");
}