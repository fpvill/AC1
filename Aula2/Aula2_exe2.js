
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
];


let usuariosMaioresDeIdade = usuarios.filter(usuario => usuario.idade > 18);


let nomesUsuariosMaioresDeIdade = usuariosMaioresDeIdade.map(usuario => usuario.nome);


console.log("Usuários com idade superior a 18 anos:");
for (let nome of nomesUsuariosMaioresDeIdade) {
    console.log(nome);
}
