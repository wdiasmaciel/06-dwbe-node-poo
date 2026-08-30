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

let animal = new Animal("Animal qualquer");
animal.exibir;
animal.som();

animal.setNome = "Rufos";
animal.exibir;
animal.som();

let cachorro = new Cachorro("Cosmos");
cachorro.som();
cachorro.exibir;

cachorro.setNome = "Gordom";
cachorro.exibir;
cachorro.som();
