class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    som() {
        console.log(this.nome + ": som de animal.");
    }
}

class Cachorro extends Animal {
    som() {
        console.log(this.nome + ": latido de cachorro.");
    }
}

let animal = new Animal("Animal qualquer");
let cachorro = new Cachorro("Rufos");

animal.som();
cachorro.som();
