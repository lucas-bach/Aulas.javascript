const pessoa = {
    nome: 'Lucas Bach',
    idade: 25,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
    
};

/*pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}
*/

pessoa.nome = 'Priscila';
pessoa.idade = 29

pessoa.descrever();