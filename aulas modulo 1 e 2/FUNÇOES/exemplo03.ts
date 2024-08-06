// function nomeCompleto  (nome ,sobrenome){

//     const nomeUsuario = `${nome}  ${sobrenome}`
//     return nomeUsuario

// }

// const impriMir = nomeCompleto('gabriel','marquisio')

// console.log(impriMir);

function verivificaIdade(idade) {
    if ( idade <= 17){
        return 'nao é maior de idade'
    }

    return 'é maior de idade'
        
}

// ARROW FUNCTION  

const verivificaIdade2 = (idade) =>{

    if ( idade <= 17){
        return 'nao é maior de idade'
    }

    return 'é maior de idade'
        
}

console.log(verivificaIdade2(17));