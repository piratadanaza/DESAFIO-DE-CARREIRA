// crie um objeto que represente um cartao de consumo de um cliente . deve ter :
// nome do cliente :
// idade do cliente :
// produtos consumidos :

// cada produto pode ter :

// nome do produto :
// preço unitario em cenatavos :
// quantidade comprada :

// pode inventar os dados coloque pelo menos 3 produtos .

type Tproduto = {
    nome : string 
    preco : number 
    quantidade : string

}
type Tcliente = {
    nome: string
    idade: number
    produto: Tproduto[]
}
const Cartaoguido = {
    nome : 'guido',
    idade : 33 ,
    produtos: [
        {
        nome : 'pizza de calabreza',
        preco: 9500 ,
        quantidade : 1
        },
        {
            nome: 'refrigerante coca cola lata',
            preco: 500 ,
            quantidade: 2
        },
        {
            nome : 'pudim',
            preco: 2000,
            quantidade:3
        }
    ]
}
// console.log(Cartaoguido)

// faça um programa que imprima uma mensagem amigavel do resumo do cartao de consumo 
// ( que iclui chamar o cliete pelo nome ) que informa o valor que ele deve pagar 

let total = 0

for (let produto of Cartaoguido.produtos) {

    total += produto.preco * produto.quantidade 
}
console.log(`o Total da compra do cliente ${Cartaoguido.nome} foi de ${total/100}`)
