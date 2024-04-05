class Animal {
    emitirSom() {
        console.log("O animal emitiu um som.");
    }

    correr() {
        console.log("O animal está correndo.");
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log("O cachorro está latindo.");
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log("O gato está miando.");
    }
}

let animal = new Animal();
let cachorro = new Cachorro();
let gato = new Gato();

animal.emitirSom(); 
animal.correr();

cachorro.emitirSom(); 
cachorro.correr();
gato.emitirSom(); 
gato.correr();