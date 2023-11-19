const pessoa = {
    nome: 'Lucas Bach',
    idade: 25,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
    
};


const atributo = 'idade'

console.log(pessoa['nome'])


