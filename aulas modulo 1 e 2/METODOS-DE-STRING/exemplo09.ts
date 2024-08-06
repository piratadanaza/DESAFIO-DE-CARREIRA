// indexof--> retorna o indice da correspondencia em uma string
//includes-->retorna verdadeiro ou falso caso encontre ou nao a correspondencia em uma string

const texto:string = 'eu adoro a cubos academy e adoro aulas de logica'

console.log(texto);

const indicedaCorrespondencia = texto.indexOf('aula')

if (indicedaCorrespondencia !==  -1 ){
    console.log('encontrou a palavra');  
}else console.log('nao encontrou a palavra');  

console.log(indicedaCorrespondencia);

const existeCorrespondencia = texto.includes('academy')

console.log(existeCorrespondencia);

