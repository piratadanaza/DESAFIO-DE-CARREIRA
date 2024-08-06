const frutas =['bananas','abacaxi','maça','pera','uva','manga']

console.log(frutas.length)

frutas[6]= 'melao'

console.log(frutas.length)

// TAMANHO -1
console.log(frutas)
let i = frutas.length - 1
console.log(frutas[i])

// o proximo indice a ser adicionado e sempre o tamanho do array 
frutas[frutas.length] = 'abacate'

console.log(frutas)
