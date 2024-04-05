function validarEmail(email) {
    
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    
    return regex.test(email);
}


console.log(validarEmail("felipe@gmail.com")); 
console.log(validarEmail("felipe@gmail.com.br")); 
console.log(validarEmail("felipe@gmail")); 
console.log(validarEmail("felipe_gmail.com"));
