//PadStart--> completar o inicio da string com a correspondencia,de acordo com tamanho definido
//PadEnd-->completar o fim da string com a correspondencia,de acordo com o tamanho definido

const texto = 'guido'

console.log(texto);

const textoFormatado = texto.padStart(20,'-')
const textoFormatado2 = texto.padEnd(20,'-')

console.log(textoFormatado);
console.log(textoFormatado2);


const finalCartao = '1234 5678 9899 5987 '
const numeroFormatado = finalCartao.slice(-4).padStart(19,'**** ')

console.log(numeroFormatado);

