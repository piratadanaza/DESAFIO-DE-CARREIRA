// READONLY <TIPO >

type pessoa = {
    nome :string
    email: string
    idade: number
}

const usuarios:Readonly<pessoa>[] = []

usuarios[usuarios.length] = {
    nome:'gabriel',
    idade:27,
    email:'gbrl@email.com'
}

// usuarios[0].nome = 'yvyuguyguyg'

const usuario : Readonly<pessoa> = {
    nome:'gabriel',
    idade:27 ,
    email:'gbrl@email.com'
}

//  usuario.nome ('joao')

 console.log(usuario);
 