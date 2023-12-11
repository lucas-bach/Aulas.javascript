/*
2- Faça um programa que receba N (quantidade de números) e seus respectivos
valores.
Imprima o maior número par e o menor número ímpar.



*/

const {gets, print} = require('./funcoes_auxiliares');

const n = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        if(maiorNumeroPar === null || numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    }else {
        if (menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }
    
}

print(`Maior número par é: `+maiorNumeroPar);
print(`Menor número ímpar é: `+menorNumeroImpar);

