class Animal {
    constructor(nome) {
        this.nome = nome;
        console.log(this.nome + ': som de animal.');
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super(nome);
        console.log(this.nome + ': latido de cachorro.');
    }
}

var a = new Animal("Animal qualquer");
var b = new Cachorro("Rufos");

