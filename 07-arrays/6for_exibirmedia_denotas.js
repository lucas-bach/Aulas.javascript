
const notas = [];

notas.push(7);
notas.push(7);
notas.push(8);
notas.push(7);
notas.push(7);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}

const media = soma / notas.length
const nmedia = media.toFixed(2)
console.log(nmedia);