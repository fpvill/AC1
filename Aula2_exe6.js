
class Livro {
    constructor(titulo, paginas) {
        this.titulo = titulo;
        this.paginas = paginas;
    }
}

let livros = [
    new Livro("Dom Quixote", 863),
    new Livro("Guerra e Paz", 1225),
    new Livro("Moby Dick", 635),
    new Livro("A Divina Comédia", 798),
    new Livro("Orgulho e Preconceito", 279)
];


let livrosMaisDe300Paginas = livros.filter(livro => livro.paginas > 300);


let titulosLivrosMaisDe300Paginas = livrosMaisDe300Paginas.map(livro => livro.titulo);


console.log("Títulos dos livros com mais de 300 páginas:");
console.log(titulosLivrosMaisDe300Paginas);

