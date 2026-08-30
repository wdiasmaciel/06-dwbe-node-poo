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

let animal = new Animal("Animal qualquer");
console.log(`Nome: ${animal.getNome}`);
animal.som();
animal.comida("Ração"); 
animal.setNome = "Rufos";
console.log(`Nome: ${animal.getNome}`);
animal.som();
animal.comida("Leite");

let cachorro = new Animal("Cosmos");
console.log(`Nome: ${cachorro.getNome}`);
cachorro.som();
cachorro.comida("Ração"); 
cachorro.setNome = "Gordom";
console.log(`Nome: ${cachorro.getNome}`);
cachorro.som();
cachorro.comida("Leite");
