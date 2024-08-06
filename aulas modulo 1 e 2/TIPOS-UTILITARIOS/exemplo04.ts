// PICK < tipo , propriedade >
// OMIT < tipo , propriedades >

type carro = {
    marca:string
    modelo:string
    ano:number
    portas:number
}

//  adiciona as propriedades de um novo tipo
type novoCarro = Pick<carro , 'marca'|'modelo'|'ano'>

//  remove as propriedades de um novo tipo
type nocarroOmit = Omit<carro ,'portas'>

type usuario = {
    nome:string
    email:string
    senha:string
}

type usuarioSemsenha = Pick<usuario , 'nome'|'email'>

type usuarioSemsenhaOmit = Omit<usuario, 'senha >'>