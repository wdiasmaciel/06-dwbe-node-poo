class Animal {
    constructor(n) {
        this.nome = n;
    }
    set setNome(n) {
        this.nome = n;
    }
    get getNome() {
        return this.nome;
    }
    get exibir() {
        console.log("Nome: " + this.getNome + "\n");
    }
    som() {
        console.log(this.getNome + ': som de animal.');
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super(nome);
        console.log(this.nome + ': latido de cachorro.');
    }
}

let a = new Animal("Animal qualquer");
a.som();
a.exibir;

a.setNome = "Rufos";
a.som();
a.exibir;

let b = new Cachorro("Cosmos");
b.som();
b.exibir;

b.setNome = "Gordom";
b.som();
b.exibir;
