// replace --> substitui a primeira correspondencia de uma string por outra
// replaceAll --> substitui todas correspondencias de uma string por outra

const texto:string = 'eu adoro a cubos acedemy e adoro aulas de logica'

console.log(texto);

const textoSubstituido = texto.replace('adoro','amo')
const textoSubstituido2 = texto.replaceAll('adoro','amo') // so existe a partir do 'es2022'

console.log(textoSubstituido);
console.log(textoSubstituido2);


