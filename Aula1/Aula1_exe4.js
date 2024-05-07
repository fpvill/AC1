function gerarEmail(nome) {
    
    let partesNome = nome.split(' ');
    

    let primeiroNome = partesNome[0].toLowerCase();
    let ultimoNome = partesNome[partesNome.length - 1].toLowerCase();
    
   
    let email = primeiroNome + '.' + ultimoNome + '@facens.br';
    
    return email;
}

let nome = "felipe vilar";
let email = gerarEmail(nome);
console.log(email);
