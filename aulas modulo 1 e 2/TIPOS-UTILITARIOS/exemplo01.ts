// UTILITARIO <tipo> ---> resulta em novo tipo manipulado

type pessoa = {
    nome:string
    email:string
    idade:number
}
type pessoaOpicional = Partial<pessoa>

const usuarios:pessoa[] =[]

function AtualizarPessoa (pessoa : pessoaOpicional) {

}

AtualizarPessoa({
    nome:'gabriel',
    idade:27 ,
    email:'gbrlmarquizio@gmail.com'
})

usuarios[usuarios.length] = {
    nome:'gabriel',
    idade:27 ,
    email:'gbrlmarquizio@gmail.com'
}

