const Json :string = "{'email': '07-tipo-de-dados-2'}"

const resultado = JSON.parse(Json) as unknown

if (
    resultado !== null && 
    typeof resultado === 'object' &&
    'name' in resultado &&
    typeof resultado.name === 'string'

){
    console.log('é um objeto co uma propriedade name do tipo string');
}
else
{
   console.log('formato desconhecido');
}