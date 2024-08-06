// function soma (numero1:number ,numero2:number):number{
//     return numero1 + numero2
// }

// const funcaoNAvariavel = soma 

// console.log(funcaoNAvariavel(3,5));


type Tpessoa ={
    nome:string
    sobrenome:string
    nomecompleto:() => void
}
type Tpessoa2 ={
    nome:string
    sobrenome:string
    nomecompleto:(idade:number) => void
}



const pessoa : Tpessoa = {
    nome:'gabriel',
    sobrenome:'portes',
    nomecompleto:function () {
        console.log(`${pessoa.nome}${pessoa.sobrenome}`);
        
    }
}
const pessoa2 : Tpessoa2 = {
    nome:'gabriel',
    sobrenome:'portes',
    nomecompleto:function (idade:number) {
        console.log(`${this.nome} ${this.sobrenome},${idade} anos`);
        
    }
}

pessoa2.nomecompleto(27)