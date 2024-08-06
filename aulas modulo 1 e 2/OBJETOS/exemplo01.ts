// const nome = 'guido'
// const idade = 33 
// const temCNH = true 

const usuario = {
    nome : 'guido',
    idade:33,
    temCNH : true ,
    email: 'guido@email.com',
    habilidades: ['javascript', 'php', 'java', 'phyton']
}

// usuario['habilidades'][0] = AQUI ACESSA UMA PROPIEDADE DE UM OBJETO 

// usuario.nome = O PONTO ' . ' ACESSA UMA PROPIEDADE DE UM OBJETO

//usuario['teste'] = retorna UNDEFIND pois a propiedade ainda nao foi definida

usuario.nome ='guido cerqueira'



console.log(`meu nome é ${usuario.nome} e tenho ${usuario.idade} anos`)