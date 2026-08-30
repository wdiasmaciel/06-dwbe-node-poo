// ========== CLASSE BASE ==========
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    get getNome() {
        return this.nome;
    }

    set setNome(n) {
        this.nome = n;
    }

    // Método que será sobrescrito (polimorfismo):
    som() {
        console.log(this.nome + ': som de animal.\n');
    }

    exibir() {
        console.log('Nome: ' + this.nome + '.');
    }
}

// ========== CLASSES FILHAS COM POLIMORFISMO ==========
class Cachorro extends Animal {
    som() {
        // Sobrescreve o método som() - POLIMORFISMO:
        console.log(this.nome + ': som de cachorro!\n');
    }
}

class Gato extends Animal {
    som() {
        // Sobrescreve o método som() - POLIMORFISMO:
        console.log(this.nome + ': som de gato! \n');
    }
}

class Passaro extends Animal {
    som() {
        // Sobrescreve o método som() - POLIMORFISMO:
        console.log(this.nome + ': som de pássaro!\n');
    }
}

// ========== DEMONSTRAÇÃO DO POLIMORFISMO ==========

console.log('===== DEMONSTRAÇÃO DE POLIMORFISMO =====\n');

// Criando diferentes animais
const animal1 = new Cachorro('Bolinha');
const animal2 = new Gato('Mimi');
const animal3 = new Passaro('Tuíti');
const animal5 = new Animal('Animal Genérico');

// Array com diferentes tipos de animais
const animais = [animal1, animal2, animal3, animal5];

// O mesmo método som() é chamad, mas cada objeto responde de forma diferente:
console.log('Chamando som() para cada animal:\n');

animais.forEach((animal) => {
    animal.exibir();
    animal.som(); // POLIMORFISMO: mesmo método, comportamentos diferentes.
});
