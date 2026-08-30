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

let a = new Animal("Animal qualquer");
let b = new Cachorro("Rufos");

