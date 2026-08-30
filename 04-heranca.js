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
        console.log('Nome: ' + this.getNome + '.');
    }
    som() {
        console.log(this.getNome + ': som de animal.\n');
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super(nome);
        console.log(this.nome + ': latido de cachorro.');
    }
}

let a = new Animal("Animal qualquer");
a.exibir;
a.som();

a.setNome = "Rufos";
a.exibir;
a.som();

let b = new Cachorro("Cosmos");
b.exibir;
b.som();

b.setNome = "Gordom";
b.exibir;
b.som();
