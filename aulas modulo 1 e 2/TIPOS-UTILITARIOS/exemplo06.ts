// EXCLUDE <uniaotipos  , tiposexcluidos >
// EXTRACT <uniaotipos  , tiposexcluidos>

type T1 = Exclude <'a'|'b'|'c' ,'b'>

type transacao = 'credito' | 'debito' | 'boleto' | 'pix'

type banco1 = Exclude<transacao, 'credito'>

type banco2 = Extract<transacao , 'boleto'| 'pix'>

type T2 = Extract <'a'|'b'|'c' ,'b'|'a'>

type banco1extract = Extract<transacao, 'debito' | 'boleto' | 'pix'>

type banco2extract = Extract<transacao , 'boleto'| 'pix'>