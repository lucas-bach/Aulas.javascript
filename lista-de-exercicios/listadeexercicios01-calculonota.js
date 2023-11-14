/* 
   1) Faça um algorítmo que dado as 3 notas por um aluno em um semestre da faculdade calcule e imprima a 
    a sua média e sua classificação conforme a tabela abaixo.
    
    Média = (nota 1 + nota 2 + nota 3 ) / 3;

    Classificação:

    -Média menor que 5, reprovado;
    -Média entre 5 e 7, recuperação;
    -Média acima de 7, aprovado.

    
*/
const nota1 = 7;
const nota2 = 2;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;
const formatmedia = media.toFixed(2)

console.log(formatmedia);

if (formatmedia <= 5) {
    console.log(`Sua nota foi ${formatmedia} você está reprovado.`);
} else if (formatmedia >=5 && formatmedia <= 6.9) {
    console.log(`Sua nota foi ${formatmedia} você está em recuperação.`);
} else {
    console.log(`Sua nota foi ${formatmedia} você está aprovado.`);
}