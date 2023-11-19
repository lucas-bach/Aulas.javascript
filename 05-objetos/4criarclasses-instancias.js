class pessoa {

    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
    

}

const lucas = new pessoa();
lucas.nome = 'Lucas Bach';
lucas.idade = 25;

const alfajor = new pessoa();
alfajor.nome = 'Alfajor Borges';
alfajor.idade = 7;

lucas.descrever();
alfajor.descrever();

