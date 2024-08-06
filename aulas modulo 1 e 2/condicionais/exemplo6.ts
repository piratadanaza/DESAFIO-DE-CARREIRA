const temIngresso : boolean = true 
const idade : number = 17 
const censura : number  = 16
const estacomOSpais : boolean = false 

// OPÉRADOR LOGICO AND &&
// TESTA TODAS AS CONDIÇOES E TODAS PRECISAM SER VERDADEIRAS

// OPERADOR LOGICO OR - || 
// TESTA SE PELO MENOS UMA CONDIÇAO É VERDADEIRA

if (temIngresso && ( idade >= censura || estacomOSpais)) {
    console.log('pode entrar')}
else {console.log('barrado') }    
