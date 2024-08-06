

// REST --> RESTO OU SOBRA 

const pessoas = [ 'guido','pedro','ana']

const [ item1 ,...novoarray] = pessoas

const usuario = {
    nome: 'guido',
    email:'guido@gmail.com',
    idade: 34
}

const { idade , ...novoObjeto } = usuario 


// console.log(novoObjeto)



// SPREAD --> ESPELHAMENTO 

const carros = ['palio' , 'gol']

const novosCarros = [...carros , 'ferrari' , 'fusca']

const carro = {
    ano : 1990 ,
    cor :'preto'
}
const informacaoCarro = {
    porta : 4 ,
    potencia : 1000

}
const carroCompleto = {
    ...carro ,
    ...informacaoCarro,
    marca: 'ford',
    modelo : 'ranger'
}



console.log(carroCompleto);

