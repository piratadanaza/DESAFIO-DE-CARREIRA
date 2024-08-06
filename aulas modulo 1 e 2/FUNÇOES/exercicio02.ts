//  FAÇA UMA FUNÇAO QUE TEM UM PARAMETRO CHAMADO IDADE E QUE DETERMINA 
//  FAIXA ETARIA DE UMA PESSOA A PARTIR DESSA IDADE 

// 21 ANOS OU MENOS ---> JOVEM
// 22 A 65 ANOS ---> ADULTO 
// 66 OU MAIS ANOS ---> IDOSO 

const verivificaIdade = (idade) =>{
  if (idade <= 21) {
    return 'jovem'
  } else if (idade <= 65){
    return 'adulto'
  } else {
    return 'idoso'
  } 
}

console.log(verivificaIdade(65));

