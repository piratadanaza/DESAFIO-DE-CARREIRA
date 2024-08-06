// crie um array de numeros aleatorios e faça um programa
// que calcula e imprima na tela a soma dos itens de um array
// requisito : usar loop for tradicional 

const numeros = [1 , 34 , 89 ,23 ,2 , 4]

let resultado = 0

for ( let i = 0; i < numeros.length; i++ ) {
    resultado += numeros[i]
}

console.log(resultado)
