// substring --> retorna a parte de uma string apartir do indice inicial e final(opcional)

const texto = 'guido cerqueira'

console.log(texto)

const PartedaString = texto.trim().substring(0,15)
const PartedaString2 = texto.substring(texto.length - 9)
const PartedaString3 = texto.substring(15 , 25)


console.log(PartedaString);
console.log(PartedaString2);
console.log(PartedaString3);