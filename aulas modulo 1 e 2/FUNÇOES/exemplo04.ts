// function soma (numero1 :number , numero2:number) {
    
//     return numero1 + numero2
// }

// const soma2 = (numero1: number , numero2:number) => {
//     return numero1 + numero2
// }

//  console.log(soma(6 ,12));

function nomeCompleto(nome:string,sobrenome:string):string{
    return `${nome} ${sobrenome}`

}
const nomeCompleto2 = (nome:string,sobrenome:string):void => {
    console.log(`${nome} ${sobrenome}`);
    

}

console.log(nomeCompleto('gabriel','portes'));
nomeCompleto2('maria','silva');


 