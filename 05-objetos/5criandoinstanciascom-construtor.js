class pessoa {

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
    

}

const lucas = new pessoa('Lucas bach', 32);


const alfajor = new pessoa('Alfajor', 7);

/*
lucas.descrever();
alfajor.descrever();
*/

console.log(lucas)

