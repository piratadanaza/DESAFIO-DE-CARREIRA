let informacoes : [string , number , boolean]

informacoes = ['gabriel',123,true]

let usuario : [string , number ,string , 'ativo'|'inativo']

usuario = ['gabriel',27,'gabriel@email.com','ativo']

const useState : [string , () => any] = ['javascript' , function () {console.log('ola pessoal');
}]

const [estado , funcao ] = useState

console.log(estado);

funcao()
