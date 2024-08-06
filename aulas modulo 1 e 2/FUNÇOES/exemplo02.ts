const usuarios = []

        // forma numero # 1 # MAIS FACIL 

// function cadastrarnovoUsuario (nome , email , idade) {
//     usuarios[usuarios.length] = {
//         nome , email , idade
//     }
// }
//   cadastrarnovoUsuario( 'gabriel' , 'gbrlmarquizio@gmail.com',27)
//   console.log(usuarios);

//   cadastrarnovoUsuario( 'maria' , 'mariarosa@gmail.com',22)
//   console.log(usuarios);     

          //  # FORMA NUMERO 2 # FACIL TBM POREM MAIS LINHAS

        function cadastrarnovoUsuario (usuario) {
            usuarios[usuarios.length] = {
                nome:usuario.nome,
                email:usuario.email,
                idade:usuario.idade
            }
        }
     cadastrarnovoUsuario({
        nome:'gabriel',
        email:'gbrlmarquizio@gmail.com',
        idade: 27
     })

   console.log(usuarios);

   cadastrarnovoUsuario({
    nome:'maria',
    email:'mariarosa@gmail.com',
    idade: 22
 })

   console.log(usuarios);