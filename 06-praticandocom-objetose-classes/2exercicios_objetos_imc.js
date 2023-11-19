/*

2- Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pesoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Istancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José 
para dizer o valor do seu IMC;

*/

class pessoa {
    nome;
    peso;
    altura;
    
    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return this.peso / (this.altura * this.altura)
        
    }

    classificarIMC(){
       const IMC =  this.calcularIMC();

       if (IMC <= 18.49) {
        return(`Seu IMC foi, ${IMC} você está abaixo do peso.`);
      } else if (IMC >= 18.5 && IMC <= 25) {
        return(`Seu IMC foi, ${IMC} você está normal.`);
      } else if (IMC >=25.1 && IMC <= 30) {
        return(`Seu IMC foi, ${IMC} você está acima do peso.`);
      } else if (IMC >= 30.1 && IMC <= 39.99) {
        return(`Seu IMC foi, ${IMC} você está obeso.`);
      } else {
        return(`Seu IMC foi, ${IMC} você está em nível de obesidade grave.`)
      }
    }



}

const lucas = new pessoa ('lucas',94 , 1.75);
console.log(lucas.classificarIMC())

const alfajor = new pessoa('alfajor', 9, 0.75)
console.log(alfajor.classificarIMC())

const tonica = new pessoa('tonica', 4 , 0.65)
console.log(tonica.classificarIMC())