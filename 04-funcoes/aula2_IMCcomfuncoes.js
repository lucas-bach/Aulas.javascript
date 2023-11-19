function calcularImc(peso, altura) {
    return peso / Math.pow(altura,2)
}

function classificarIMC(IMC) {

    if (IMC <= 18.49) {
        return `Seu IMC foi, ${IMC} você está abaixo do peso.`;
      } else if (IMC >= 18.5 && IMC <= 25) {
        return `Seu IMC foi, ${IMC} você está normal.`
      } else if (IMC >=25.1 && IMC <= 30) {
        return `Seu IMC foi, ${IMC} você está acima do peso.`;
      } else if (IMC >= 30.1 && IMC <= 39.99) {
        return `Seu IMC foi, ${IMC} você está obeso.`;
      } else {
        return `Seu IMC foi, ${IMC} você está em nível de obesidade grave.`
      }

}

//main

(function () {
  const peso = 94
  const altura = 1.75
  
  const calculo = calcularImc(peso,altura)
  const IMC = calculo.toFixed(2)
  console.log(classificarIMC(IMC))

})();


/*


function main() {
    const peso = 94
    const altura = 1.75
    
    const calculo = calcularImc(peso,altura)
    const IMC = calculo.toFixed(2)
    console.log(classificarIMC(IMC))

}

main()


*/



