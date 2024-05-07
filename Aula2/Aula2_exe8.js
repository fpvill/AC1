
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}


let produtos = [
    new Produto("Camisa", 60),
    new Produto("Calça", 75),
    new Produto("Tênis", 350),
    new Produto("Boné", 30),
    new Produto("Meias", 15)
];


console.log("Produtos e preços antes do aumento:");
produtos.forEach(produto => {
    console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
});


let precosAumentados = produtos.map(produto => {
    return { nome: produto.nome, preco: produto.preco * 1.10 };
});


console.log("\nProdutos com aumento de 10%:");
precosAumentados.forEach(produto => {
    console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
});
