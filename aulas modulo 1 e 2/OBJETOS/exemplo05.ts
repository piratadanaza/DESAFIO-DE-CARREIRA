
const usuario = 
    {nome : 'guido',
     email :'guido@gmail.com',
     endereco : {
        rua : 'RUA A',
        numero : 123
     }
    }
    const { nome ,email , endereco : {rua , numero }} = usuario
    console.log(usuario);
    
   