// type narrowing --> estreitamento
// tecnica utilizada para deixar o mais assertivo possivel do de um tipo utilizado

function soma (num1:number|string , num2:number|string) {
if (typeof num1 === "number" && typeof num2 === "number"){
    console.log(typeof num1 , typeof num2);
    
}
else if  (typeof num1 === 'number' && typeof num2 === 'string'){
 return num1+Number(num2)
} 
else if  (typeof num1 === 'string' && typeof num2 === 'number'){
    return Number(num1)+num2
}
else {
    Number(num1)+Number(num2)
}
}
soma(123,321)