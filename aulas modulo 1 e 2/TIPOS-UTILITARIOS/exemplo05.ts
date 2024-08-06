// Record <Chaves(S), Tipo>

type pessoa = Record<'nome' | 'email' | 'senha',string> 

type usuario = {
    nome:string
    email:string
    senha:string
}

type Dupla = Record <'Jogador1' | 'Jogador2' , usuario>

const time1 : Dupla = {
  Jogador1:{
    nome:'gabriel',
    email:'gabriel@email.com',
    senha:'123456'
  },
  Jogador2:{
    nome:'joao',
    email:'joao@email.com',
    senha:'123456'
  }
}


