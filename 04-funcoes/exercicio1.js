function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade){
    if (idade >= 18) {
        console.log(escrevaMeuNome('Lucas') + ', sou maior de idade!');
    }else {
        console.log('Menor de idade!');
    }
}
verificarIdade(16)