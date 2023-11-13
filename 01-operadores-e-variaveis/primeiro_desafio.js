/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

*/
const preComb = 5.29
let gastoComb = 13.5
let distViagem = 650

let litrosconsumidos = distViagem / gastoComb
let valorGasto = litrosconsumidos * preComb

console.log(valorGasto.toFixed(2))

