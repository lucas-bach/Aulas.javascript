let salario = 2500.27
let luz = 100.38
let condominio = 215.52
let internet = 110.21
let consumos = luz + condominio + internet

let total = (salario - consumos).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
console.log(total)