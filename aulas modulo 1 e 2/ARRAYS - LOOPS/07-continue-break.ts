const listafrutas :string[] =['bananas','abacaxi','maça','pera','uva','manga']

 //       for ( let item  of listafrutas ){
 //       if ( item === 'pera') {
 //           break
 //       }
 //       console.log(item)
 //       }

 //   for (let i = 0 ; i < listafrutas.length; i++){
 //       if (listafrutas[i] === 'pera' ){
 //           break
 //       }
 //       console.log(listafrutas[i])
 //   }

 //    let i = 0

 //   while (i < listafrutas.length) {
 //       if (listafrutas[i] === 'pera'){
 //           break
 //       }
 //       console.log(listafrutas[i])
 //       i++
 //   }


for (let item of listafrutas){
    if (item === 'pera' || item === 'uva'){
        continue
    }
    console.log(item)
}

    



 
  
 
 