/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço do combustível;
3 - O tipo de combústivel que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realzar esta viagem..

*/
const preComb = 5.29;
const precEtanol = 4.89;
const tipoDeCombustivel = 'Gasolina' 
let gastoCombkm = 13.5;
let distViagem = 650;

let litrosconsumidos = distViagem / gastoCombkm;

if(tipoDeCombustivel === 'Etanol') {
    let valorGasto = litrosconsumidos * precEtanol;
    console.log(valorGasto.toFixed(2))
    
} else {
    let valorGasto = litrosconsumidos * preComb;
    console.log(valorGasto.toFixed(2))
}


