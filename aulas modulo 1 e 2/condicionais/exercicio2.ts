//  o sistema de uma instituiçao financeira apresentou um problema 
// imprimir a mensagem do saldo de um cliente , o saldo era de 1 real e o sistema 
// estava imprimindo seu saldo é de " r$ 1 reais " com o nome da moeda no plural, mas sabemos
// que o correto seria " 1 real " e seria no plural apenas se o saldo fosse maior que 1 .
// crie um progrma que receba o saldo e imprima a mensagem < de acordo com seu valor .

const saldo : number= 5

// seu saldo é R$ XXXX real ou reais 

const unidade = saldo === 1 ? 'real '  : 'reais' 

console.log(`seu saldo é R$ ${saldo} ${unidade}` )
