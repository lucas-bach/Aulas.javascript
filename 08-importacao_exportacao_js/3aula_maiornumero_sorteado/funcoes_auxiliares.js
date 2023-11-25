
const entradas = [5, 50, 10, 98, 23, 78, 21, 99, 102];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print};