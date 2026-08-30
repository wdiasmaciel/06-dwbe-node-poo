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

let a = new Animal("Animal qualquer");
a.som(); a.setNome = "Rufos";
console.log("Nome: " + a.getNome + "");
a.som();
