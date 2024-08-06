// let nome : string & number  // nunca vai acontecer -->
// nome : 1234

type Tusuario = {
 nome:string
 email:string
 idade:number
}
type Tendereco = {
    rua:string
    numero:number
    cidade:string
}

type TusuarioTEndereco = Tusuario & Tendereco 
 
const usuarios:  TusuarioTEndereco [] =[
    {
        nome:'gabriel',
        email:'gabriel@email.com',
        idade:27,
        rua:'senador pompeu',
        numero: 28 ,
        cidade: 'RJ'
    }
]