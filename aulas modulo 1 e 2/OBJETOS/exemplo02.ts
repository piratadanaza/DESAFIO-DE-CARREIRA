//const usuario = ['guido' , ' maria ', 'joao']

const usuarios = [
 {nome : 'guido',
  email :'guidi@gmail.com'
 },
 {
    nome: 'maria',
    email: 'maria@gmail.com'
 },
 {
    nome: 'joao' ,
    email: 'joao@gmail.com'
 }
]

for (let usuario of usuarios){
    console.log(`nome: ${usuario.nome} , email: ${usuario.email}`)
}