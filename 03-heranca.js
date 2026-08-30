class Animal {
    constructor(nome) {
        this.nome = nome;
        console.log(this.nome + ': som de animal.<br>');
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super(nome);
        console.log(this.nome + ': latido de cachorro.<br>');
    }
}

var a = new Animal("Animal qualquer");
var b = new Cachorro("Rufos");

