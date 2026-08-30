class Animal {
    constructor(n) {
        this.nome = n;
    } set setNome(n) {
        this.nome = n;
    } get getNome() {
        return this.nome;
    } som() {
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
a.setNome = "Rufos";
console.log("Nome: " + a.getNome + "");
a.som();

let b = new Cachorro("Cosmos");
b.som(); 
b.setNome = "Gordom";
console.log("Nome: " + b.getNome + "");
b.som();
