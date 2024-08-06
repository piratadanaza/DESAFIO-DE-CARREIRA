// type Tcarro = {
//     modelo : string
//     marca : string 
//     ano : number
//     cor : string
// } 
// const carro: Tcarro = {
//     modelo : 'palio' ,
//     marca : 'fiat',
//     ano : 2000,
//     cor : 'vermelho'

// }
//  console.log(carro)

type Tpessoa = {
    nome :string ,
    senha: number
}

 const fila =  ['Guido','joao','maria','pedro','joana','ana']

const pessoas :Tpessoa[] = []

for (let i = 0 ; i < fila.length ; i++ ) {
   pessoas[i] = {
    nome: fila[i] ,
    senha : i + 1
   }
}

console.log(pessoas)