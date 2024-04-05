
class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}


let usuarios = [
    new Usuario("Felipe", 25),
    new Usuario("Marcos", 30),
    new Usuario("Carlos", 35)
];


let nomesEmMaiusculas = usuarios.map(usuario => usuario.nome.toUpperCase());


console.log("Números ímpares de 0 a 100:");
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}


console.log("Nomes dos usuários em letras maiúsculas:");
console.log(nomesEmMaiusculas);


