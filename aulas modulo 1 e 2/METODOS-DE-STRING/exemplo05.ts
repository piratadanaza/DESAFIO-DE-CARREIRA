// slice --> extrai a parte de uma string de acordo com seus indices

import { log } from "console"

const texto:string = 'guido cerqueira'

console.log(texto)

const textoFormatado = texto.slice(3,-5)
const textoFormatado2 = texto.slice(-5,-3)
const textoFormatado3 = texto.slice(-9)

console.log(textoFormatado);
console.log(textoFormatado2);
console.log(textoFormatado3);
