
/*

1 - Crie uma classe para representar carros.
Os carros possuem marca, uma cor e um gasto médio de combustível por Km/rodado.
Crie um método que dado a quantidade de Km e o preço do combustível nos dê o valor
gasto em reais para realizar este precurso.

*/

class carro {

    marca;
    cor;
    gastoMedioPorKm; 

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel
    }


}

const uno = new carro('Fiat','Branco',1/14)
console.log(uno.calcularGastoDePercurso(70, 5.21))

const virtus = new carro('Volkswagen','Cinza', 1/18)
console.log(virtus.calcularGastoDePercurso(70, 5.21))