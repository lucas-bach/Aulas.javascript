/*
3- Faça um programa que calcule e imprima o salário a ser transferido para um 
funcionário.

Para realizar o calculo receba o valor bruto do salário e o adicional dos 
benefícios.

O salário a ser transferido é calculado da seguinte maneira.

Valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional 
dos benefícios.

 Para calcular o percentual de imposto segue as aliquotas:

De R$ 0.00 a R$ 1100.00 = 5.00%
De R$ 1100.01 a R$ 2500.00 = 10.00%
Maior que R$ 2500.00 = 15.00%


*/

const {gets, print} = require('./funcoes_auxiliares');

const valorSalarioBruto = gets();
const adicionalDosBeneficios = gets();

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
}

function pegarPercentualComBaseNoSalario(salario) {
    
}

print(calcularPorcentagem(valorSalarioBruto, 10));
