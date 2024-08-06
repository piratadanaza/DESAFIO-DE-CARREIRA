type TPessoa = {
    nome:string
    idade?: number
}
function saudacao (nome:string , idade:number) {
console.log(`meu nome é ${nome} , tenho ${idade} anos `);


}

const gabriel : TPessoa = {
   nome:'gabriel',
   idade:27
}
// const idade = gabriel.idade as number 

// saudacao(gabriel.nome,idade)

console.log('idade' in gabriel);
