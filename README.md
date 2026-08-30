# 06-dwbe-node-poo

Analise e execute cada algoritmo desta prática.

Exemplos para executar cada algoritmo rapidamente:

```bash
node 01-heranca.js
```

```bash
node 02-heranca.js
```

Exemplos alternativos para executar cada algoritmo rapidamente:

```bash
node 01*
```

```bash
node 02*
```

---

# Exercícios

## 1: Classe Pessoa com Herança
Crie uma classe `Pessoa` com os atributos `nome` e `idade`. Depois, crie uma classe `Estudante` que herda de `Pessoa` e adicione o atributo `matricula`. Solicite os dados ao usuário a partir do teclado e exiba as informações.

**Dica:** Use `prompt-sync` para ler os dados do teclado.

---

## 2: Polimorfismo com Veículos
Crie uma classe `Veiculo` com um método `acelerar()`. Depois crie subclasses `Carro`, `Moto` e `Bicicleta` que herdam de `Veiculo` e sobrescrevem o método `acelerar()` de forma diferente. Peça ao usuário qual tipo de veículo escolher e execute o método correspondente.

---

## 3: Sistema de Funcionários
Crie uma classe `Funcionario` com atributos `nome`, `cargo` e `salario`. Depois, crie subclasses `Gerente` e `Desenvolvedor`. Solicite dados de 3 funcionários diferentes ao usuário e armazene em um vetor. Exiba as informações de todos os funcionários.

---

## 4: Cálculo de Áreas com Polimorfismo
Crie uma classe `Forma` com um método `calcularArea()`. Crie subclasses `Quadrado`, `Retangulo` e `Circulo` que herdam de `Forma`. Peça ao usuário qual forma deseja, solicite as dimensões necessárias e calcule a área.

**Fórmulas:**
- Quadrado: `lado * lado`
- Retangulo: `largura * altura`
- Circulo: `3.14159 * raio * raio`

---

## 5: Hierarquia de Animais Customizada
Crie uma classe `Animal` com os atributos `nome`, `tipo` e `idade`. Crie subclasses `Cachorro`, `Gato` e `Passaro`. Permita que o usuário registre um número indeterminado de animais. Armazene-os em um vetor e exiba todos com seus sons específicos, usando polimorfismo.

---
