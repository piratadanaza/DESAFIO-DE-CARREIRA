// CRIE UM UBJETO QUE REPRESENTARA UMA CALCULADORA .
// O OBJETO DEVE CONTER QUATRO METODOS QUE REALIZARA AS 
// QUATRO OPERAÇOES MATEMATICAS : SOMA , SUBTRAÇAO , MULTIPLICAÇAO E DIVISAO .

// CADA METODO DEVERA RETORNAR O RESULTADO DA OPERAÇAO 
// IMPLEMENTE O METODO COM SUAS RESPECTIVAS TIPAGENS DE PAREMETROS E RETORNO.

type Tfuncaocalc = (numero1:number , numero2:number) => number

type Tcalculadora =  {
    soma:Tfuncaocalc
    subtracao:Tfuncaocalc
    multiplicacao:Tfuncaocalc
    divisao:Tfuncaocalc
}

const calculadora:  Tcalculadora = {
    soma : function (numero1:number , numero2:number ) :number {
        return numero1 + numero2
    },
    subtracao: function (numero1:number , numero2:number ) :number {
        return numero1 - numero2
    },
    multiplicacao: function (numero1:number , numero2:number ) :number {
        return numero1 * numero2
    },
    divisao: function (numero1:number , numero2:number ) :number {
        return numero1 / numero2
    }
}
 console.log(calculadora.soma(6,8));
 console.log(calculadora.subtracao(6,8));
 console.log(calculadora.multiplicacao(6,8));
 console.log(calculadora.divisao(6,8));