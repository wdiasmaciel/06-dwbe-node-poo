class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    som() {
        console.log(this.nome + ": som de animal.<br>");
    }
}

class Cachorro extends Animal {
    som() {
        console.log(this.nome + ": latido de cachorro.<br>");
    }
}
var a = new Animal("Animal qualquer");
var c = new Cachorro("Rufos");
a.som();
c.som();
