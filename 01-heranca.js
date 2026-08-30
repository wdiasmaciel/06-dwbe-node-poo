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

let a = new Animal("Animal qualquer");
let c = new Cachorro("Rufos");

a.som();
c.som();
