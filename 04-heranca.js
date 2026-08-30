class Animal {
    constructor(n) {
        this.nome = n;
    } set setNome(n) {
        this.nome = n;
    } get getNome() {
        return this.nome;
    } som() {
        console.log(this.getNome + ': som de animal.<br>');
    }
}
var a = new Animal("Animal qualquer");
a.som(); a.setNome = "Rufos";
console.log("Nome: " + a.getNome + "<br>");
a.som();
