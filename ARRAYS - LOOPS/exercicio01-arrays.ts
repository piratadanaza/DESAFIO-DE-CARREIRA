// crie um array com 5 nomes de paise 
// adicione um pais ao fim da lista 
// imprima a lista na tela
// altere o quinto pais da lista para um novo pais
// imprima a lista na tela 
// imprima o ultimo pais da lista na tela 
// imprima o segundo pais da lista na tela 
// imprima o pais de indice 2 na tela

const paises = ['brasil' , 'alemanha' , ' argentina' ,'chile' ,'uruguai']

paises[paises.length] = 'EUA'

console.log(paises)

paises[4]= 'paraguai'

console.log(paises)

console.log(paises[paises.length - 1])

console.log(paises[1])

console.log(paises[2])

