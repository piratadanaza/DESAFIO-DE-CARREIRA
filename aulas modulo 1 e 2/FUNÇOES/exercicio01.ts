// DECLARE UMA VARIAVEL QUE ARMAZENE UM OBJETO CONTENDO
// DADOS DE UMA PESSOA : NOME , IDADE , PROFISSAO E ALTURA 

// FAÇA UMA FUNÇAO QUE TEM UM PRAMETRO . ESSA FUNÇAO DEVE
// IMPRIMIR NA TELA A APRESENTAÇAO DE UMA PESSOA , SEGUINDO O MODELO ABAIXO:

//OLA MEU NOME É JOAO , SOU UM JOVEM DE 12 ANOS , 1.4M DE ALTURA E SOU ESTUDANTE


const usuario = {
    nome:'gabriel',
    idade:27 ,
    altura: 1.7,
    profissao:'autonomo'
}

  function apresentacao(dadosusuario){
    console.log(`OLA MEU NOME É ${dadosusuario.nome} , SOU UM JOVEM DE ${dadosusuario.idade} ANOS , ${dadosusuario.altura}M DE ALTURA E SOU ${dadosusuario.profissao}`);
  }

  apresentacao(usuario)