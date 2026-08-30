class Animal {
    constructor(n) {
        this.nome = n;
    } set setNome(n) {
        this.nome = n;
    } get getNome() {
        return this.nome;
    } som() {
        console.log(`${this.getNome}: som de animal.`);
    } comida = (c) => {
        console.log(`Comida do animal: ${c}.`);
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
a.comida("Ração"); 
a.setNome = "Rufos";
console.log(`Nome: ${a.getNome}`);
a.som();
a.comida("Leite");

let b = new Animal("Cosmos");
b.som();
b.comida("Ração"); 
b.setNome = "Gordom";
console.log(`Nome: ${b.getNome}`);
b.som();
b.comida("Leite");
