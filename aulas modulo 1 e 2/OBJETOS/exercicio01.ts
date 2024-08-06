// DECLACRE UMA VARIAVELQUE ARMAZENA UM OBJETO CONTENDO AS SEGUNTES PROPIEDADES :
// NOME , IDADE , ALTURA , TEM CNH , E HABILIDADES . 

// DEPOIS , FAÇA UM PROGRAMA QUE IMPRIME NA TELA O BELO TEXTO ABAIXO , SUBSTITUINDO OS DADOS PESSOAIS 
// PELOS DADOS DO OBJETO :

// GUIDO TEM 33 ANOS , 1.87M DE ALTURA , POSSUI CNH ,E AS SEGUINTES HABILIDADES :
//  - JAVASCRIPT
//  - PHP 
//  - PYTHON 
//  - JAVA 

const usuario = {
    nome : 'guido',
    idade : 33 ,
    altura : 1.87 ,
    temCNH : true ,
    habilidades : ['javascript', 'PHP' ,'python' ,'java' ,'SQL' ,'TYPESCRIPT']

}

const  possuiCNH = usuario.temCNH ? 'possui CNH' : 'nao possui CNH'

console.log(`${usuario.nome} tem ${usuario.idade} anos, ${usuario.altura}m de altura, ${possuiCNH} ,e as seguintes habilidades `)
for ( let item of usuario.habilidades){
    console.log(`-${item}`)

}