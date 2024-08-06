let modelo : 'ferrari'

modelo = 'ferrari'
modelo = 'ferrari'
modelo = 'ferrari'
modelo = 'ferrari'

let inativo : 0 
let ativo: 1 

inativo = 0
ativo = 1

type TCarroFord = {
    modelo:string
    marca:'FORD'
    ano:number
    cor:string

}

const  carros :TCarroFord[] = []

carros[carros.length] = {
    modelo:'FIESTA',
    ano:2020,
    cor:'PRETO',
    marca:'FORD'
}
console.log(carros)
