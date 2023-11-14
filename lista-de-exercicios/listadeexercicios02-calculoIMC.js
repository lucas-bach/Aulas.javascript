/*
  
  2) O IMC - é um critério da OMS para dar indicação sobre a condição 
  de peso de uma pessoa.

  Fórmula do IMC:
  IMC = peso / (altura * altura)

  Elabore um algoritmo que dado o peso e a altura de um adulto mostre,
  sua condição de acordo com a tabela abaixo.

  IMC em adultos Condição:
  - Abaixo de 18.5 abaixo do peso;
  - Entre 18.5 e 25 peso normal;
  - Entre 25 e 30 acima do peso;
  - Entre 30 e 40 obeso;
  - Acima de 40 obesidade grave;
  */

  const peso = 94
  const altura = 1.75
  const calculo = peso / Math.pow(altura,2)
  const IMC = calculo.toFixed(2)

  if (IMC <= 18.49) {
    console.log(`Seu IMC foi, ${IMC} você está abaixo do peso.`);
  } else if (IMC >= 18.5 && IMC <= 25) {
    console.log(`Seu IMC foi, ${IMC} você está normal.`);
  } else if (IMC >=25.1 && IMC <= 30) {
    console.log(`Seu IMC foi, ${IMC} você está acima do peso.`);
  } else if (IMC >= 30.1 && IMC <= 39.99) {
    console.log(`Seu IMC foi, ${IMC} você está obeso.`);
  } else {
    console.log(`Seu IMC foi, ${IMC} você está em nível de obesidade grave.`)
  }