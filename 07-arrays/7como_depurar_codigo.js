
const notas = [];

notas.push(10);
notas.push(10);
notas.push(5);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}

const media = soma / notas.length
const nmedia = media.toFixed(2)
console.log(nmedia);