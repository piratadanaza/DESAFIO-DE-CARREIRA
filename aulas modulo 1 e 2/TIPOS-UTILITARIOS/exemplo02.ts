// REQUIRED < TIPO >

type pessoa = {
    nome:string
    email:string
    idade:number
}
type pessoaObrigatoria = Required<pessoa>

const usuarios:pessoa[] =[]

function AtualizarPessoa (pessoa : pessoaObrigatoria) {

}

AtualizarPessoa({
    nome:'gabriel',
    idade:27 ,
    email:'gbrlmarquizio@gmail.com'
})

usuarios[usuarios.length] = {
    nome:'JOAO',
    idade:27 ,
    email:'gbrlmarquizio@gmail.com'
}
