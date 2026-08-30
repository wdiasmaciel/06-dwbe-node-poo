class Animal {
    constructor(n) {
        this.nome = n;
    } set setNome(n) {
        this.nome = n;
    } get getNome() {
        return this.nome;
    } som() {
        console.log(`${this.getNome}: som de animal.`);
    } comida = (c) => {
        console.log(`Comida do animal: ${c}.`);
    }
} let a = new Animal("Animal qualquer");
a.som();
a.comida("Ração"); a.setNome = "Rufos";
console.log(`Nome: ${a.getNome} `);
a.som();
a.comida("Leite");
