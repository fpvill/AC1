class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}


let produtos = [
    new Produto("Camisa", 50),
    new Produto("Calça", 120),
    new Produto("Tênis", 80),
    new Produto("Boné", 25),
    new Produto("Meias", 150)
];


produtos.forEach(produto => {
    if (produto.preco > 100) {
        produto.nome = "Produto Caro";
    }
});


console.log("Produtos:");
produtos.forEach(produto => {
    console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2)} (${produto.nome === "Produto Caro" ? "Produto Caro" : "Produto Normal"})`);
});

