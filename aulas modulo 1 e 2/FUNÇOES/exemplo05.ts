


type TUsuario = {
    nome: string
    idade:number
    email:string
}

const usuarios : TUsuario[] = []

function cadastrarnovoUsuario (usuario:TUsuario) {
    const novoUsuario ={
        nome:usuario.nome,
        email:usuario.email,
        idade:usuario.idade
    }
    usuarios[usuarios.length] = novoUsuario

    return novoUsuario
}

const resultado = cadastrarnovoUsuario ({
    nome:'gabriel',
    email:'gbrlmarquizio@gmail.com',
    idade: 27
})

console.log(resultado);
console.log(usuarios);
