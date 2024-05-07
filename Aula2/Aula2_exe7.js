class Carro {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
}

let carros = [
    new Carro("Toyota", 2008),
    new Carro("Honda", 2015),
    new Carro("Toyota", 2012),
    new Carro("Ford", 2018),
    new Carro("Toyota", 2011)
];

let primeiroToyota = carros.find(carro => carro.marca === "Toyota");

let carrosFabricadosApos2010 = carros.filter(carro => carro.ano > 2010);

console.log("Primeiro carro da marca Toyota:", primeiroToyota);
console.log("Carros fabricados após 2010:", carrosFabricadosApos2010);