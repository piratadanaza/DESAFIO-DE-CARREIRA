const identificador : number | string | '123' = '123'

type TPessoa  = {
    nome:string
    email:string

}
type TPessoa2  = {
    nome:string
    email:string
    idade?:number|string

}

const usuarios : TPessoa[]|TPessoa2[] = []

usuarios[usuarios.length] = {
    nome:'gabriel',
    email:'gbrlmarquizio@gmail.com',
    idade:27
   
}
 // console.log(usuarios[0].idade);
 