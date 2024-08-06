// faça um programa que percorra uma lista de ususarios 
// para encontar o usuario 'joao'. caso encontre imprima 'encontrado' 
// caso contrario imprima 'nao encontrado'

const usuarios : string[] = ['maria' , 'ana' ,'joao', 'guido' , 'pedro']

    let encontrado : boolean = false

    for (let usuario of usuarios) {
    if (usuario === 'joao'){
        encontrado = true
        break  }
        }
        if (encontrado) {
            console.log('ENCONTRADO')
            
        } else {console.log('NAO ENCONTRADO')}