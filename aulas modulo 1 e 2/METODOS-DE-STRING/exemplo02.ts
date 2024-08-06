// Trim --> remove todos os espaços do começo e do fim de uma string
// TrimSTART --> remove todos os espaços do COMEÇO de uma string
// TrimEND -->  remove todos os espaços do FIM de uma string

const texto = 'alguma coisa'

// console.log (texto.length)

const TextoSemespaco = texto.trim()

// console.log(TextoSemespaco.length)

// console.log(texto.length)

const usuario = {
    email: 'guido@email.com',
    senha:'abc123'
}

const email = ' guido@email.com '
const senha = 'abc123'

      //  EXEMPLOS :

//console.log(usuario.email === email.trim())
//console.log(usuario.email === email.trimStart())
console.log(usuario.email === email.trimEnd())