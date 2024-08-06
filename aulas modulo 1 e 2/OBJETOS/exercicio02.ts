// crie um sistema de distribuiçao de senha por ordem de chegada
// a fila sera representada pelo array ['Guido','joao','maria','pedro','joana','ana']
//voce deve criar uma nova lista onde cada item represente um objeto contendo a senha e o nome da pessoa .
// a senha começa sempre em 1 

const fila =  ['Guido','joao','maria','pedro','joana','ana']

const pessoas  = []

for (let i = 0 ; i < fila.length ; i++ ) {
   pessoas[i] = {
    nome: fila[i] ,
    senha : i + 1
   }
}

console.log(pessoas)