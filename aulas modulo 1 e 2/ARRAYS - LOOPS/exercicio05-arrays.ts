// faça um programa de quanstas 'A' existem 
// numa determinada palavra . imprima o resultado na tela 

const palavra = 'ALFABETO'

let contador = 0

for (let letra of palavra){
    if ( letra === 'A'){
       contador += 1
    }
} console.log(contador)

// QUANDO QUISER SABER QUANTAS VEZES UMA LETRA SE REPETE EM UMA 
// PALAVRA ADICIONE UMA VARIAVEL QUE FAÇA A SOMA DAS LETRAS 
// NO EXMPLO A CIMA ESTA VARIAVEL É ( LET CONTADOR = 0 ) 
