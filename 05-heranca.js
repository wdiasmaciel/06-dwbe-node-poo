class Animal {
    #nome; // Atributo privado.
    constructor(n) {
        this.#nome = n;
    } 
    set setNome(n) {
        this.#nome = n;
    } 
    get getNome() {
        return this.#nome;
    } 
    exibir = () => console.log(`Nome: ${this.getNome}.`);   
    som = () => console.log(`${this.getNome}: som de animal.`);
    comida = (c) => console.log(`Comida do animal: ${c}.\n`);
} 

class Cachorro extends Animal {
    constructor(nome) {
        super(nome);
        console.log(`${this.getNome}: latido de cachorro.`);
    }
}

let animal = new Animal("Animal qualquer");
animal.exibir();
animal.som();
animal.comida("Ração"); 

animal.setNome = "Rufos";
animal.exibir();
animal.som();
animal.comida("Leite");

let cachorro = new Cachorro("Cosmos");
cachorro.exibir();
cachorro.som();
cachorro.comida("Ração"); 

cachorro.setNome = "Gordom";
cachorro.exibir();
cachorro.som();
cachorro.comida("Leite");
