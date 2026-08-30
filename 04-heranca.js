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
console.log("Nome: " + a.getNome + "\n");

a.setNome = "Rufos";
a.som();
console.log("Nome: " + a.getNome + "\n");

let b = new Cachorro("Cosmos");
b.som(); 
console.log("Nome: " + b.getNome + "\n");

b.setNome = "Gordom";
b.som();
console.log("Nome: " + b.getNome + "\n");
