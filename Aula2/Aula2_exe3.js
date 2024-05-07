class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}


let usuarios = [
    new Usuario("Felipe", 21),
    new Usuario("Duda", 20),
    new Usuario("Carlos", 17),
    new Usuario("Vitor", 27)
];


let primeiroUsuarioEntre25e30 = usuarios.find(usuario => usuario.idade >= 25 && usuario.idade <= 30);

// Mostrar o nome do primeiro usuário com idade entre 25 e 30 anos
console.log("Nome do primeiro usuário com idade entre 25 e 30 anos:");
console.log(primeiroUsuarioEntre25e30.nome);

