// Uppercase <Tipostring>
// Lowercase <Tipostring>
// Capitalize <Tipostring>

type transacaoDebito = 'credIto'
type transacaoCredito = 'dEbito'

type transacao = Uppercase <transacaoCredito> | Uppercase<transacaoDebito>
type transacao2 = Lowercase <transacaoCredito> |Lowercase<transacaoDebito>

type transacao3 = Capitalize <transacao2>

const Tipo:transacao = 'CREDITO'
const Tipo2 :transacao2='debito'
const Tipo3:transacao3 ='Debito'