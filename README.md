# DESAFIO-DE-CARREIRA

SOFT SKILLS 

COMUNICATIVO por Excelência Quando adentro uma sala de reuniões, não vejo apenas cadeiras e mesas; vejo oportunidades de diálogo. Minhas palavras são cuidadosamente escolhidas para transmitir clareza e empatia. Seja em uma apresentação formal ou em uma negociação delicada, estou sempre pronto para estabelecer pontes de entendimento.

AFABILIDADE como Estratégia A cortesia é uma ferramenta poderosa. Cumprimento colegas com um sorriso, reconhecendo que cada pessoa traz consigo uma bagagem única. Afinal, o ambiente profissional é um ecossistema de talentos diversos, e a gentileza é o solo fértil onde florescem as colaborações frutíferas.

OUVINTE Atento, Curador de Insights Quando alguém compartilha suas ideias, não é apenas informação que recebo; são insights, perspectivas e desafios. Sou um colecionador de conhecimento, e cada conversa é uma oportunidade de aprendizado. Seja um colega expondo um problema ou um cliente delineando suas necessidades, estou lá, ouvindo com foco e discernimento.

SOBRE O LINLKEDIN 

sei que é um lugar onde posso desenvolver conhecimento com novas pessoas e  empresas que se for do interesse deles me dar a oportunidade de DEV junior. 

# MEU LINKEDIN VOU DEICHAR AQUI --> (https://www.linkedin.com/in/gabriel-portes-marquisio-47930a2ba/ )

ETICA EM TECNOLOGIA 

é certo que a ética nao se deve ter somente na tecnologia mas sim na vida e isso que te faz ser um ser humano melhor , usar o conhecimento para o certo .

GESTAO DE TEMPO 

o meu tempo para organizar minhas tarefas sao bem divididos eu trabalho de forma online ja faz algum tempo entao isso pra min nao e um problema , minha organizaçao sou bem pontual as vezes ate adianto as tarefas quando preciso caso tenho que revisar antes de entregar no prazo alguma coisa .

GIT BASICO 

O que é o Git? O Git é um sistema de controle de versões distribuído e de código aberto. Ele é amplamente utilizado no desenvolvimento de software, mas sua versatilidade vai além: você pode usá-lo para gerenciar qualquer tipo de arquivo ou informação. Imagine o Git como um guardião das mudanças em seus projetos, registrando cada passo e permitindo que você volte no tempo quando necessário.
Snapshots, Não Diferenças A principal diferença entre o Git e outros sistemas de controle de versão (como Subversion) está na forma como ele trata os dados. Enquanto a maioria dos sistemas armazena alterações nos arquivos, o Git captura snapshots (fotos) do estado completo do projeto a cada commit. Isso significa que, quando você salva, ele registra todos os arquivos, não apenas as mudanças. É como ter um álbum de fotos do seu projeto, com cada imagem representando um momento específico.
Operações Locais e Velocidade Surpreendente O Git é quase como um assistente pessoal local. A maioria das operações acontece no seu próprio computador, sem depender de uma rede. Isso torna tudo mais rápido e eficiente. Pesquisar o histórico do projeto? O Git busca diretamente no seu banco de dados local. É como se os deuses da velocidade tivessem abençoado o Git com superpoderes extraterrestres.
Áreas do Git e Referências
Área de Trabalho (Working Directory): Onde você edita seus arquivos.
Área de Preparação (Staging Area): Aqui, você seleciona as mudanças que serão incluídas no próximo commit.
Repositório (Local Repository): Onde os snapshots são armazenados.
HEAD: Uma referência ao último commit feito.
Branches e Tags: Maneiras de organizar e marcar seus commits.
Em resumo, o Git é como um assistente fotográfico que captura momentos do seu projeto, mantém tudo local e age mais rápido que um raio. Se precisar voltar no tempo ou colaborar com outros.


TYPESCRIP 

O que é o TypeScript? O TypeScript é um superset da linguagem JavaScript. Em outras palavras, ele estende o JavaScript adicionando funcionalidades, como a declaração de tipos de variáveis. Desenvolvido e mantido pela Microsoft, o TypeScript é uma ferramenta poderosa para quem escreve código. Mas vamos além das definições técnicas e explorar o que ele realmente pode fazer:
Tipagem Segura (Type Safety): Imagine que o TypeScript é como um guarda de trânsito rigoroso. Ele previne que nossas aplicações tentem realizar operações inválidas. Por exemplo, multiplicar um número por um array ou chamar uma função com o tipo de argumento errado. O TypeScript nos ajuda a evitar esses erros comuns.
Documentação Viva: Quando você escreve código em TypeScript, está também criando uma documentação viva. Os tipos de dados são explicitamente declarados, facilitando a compreensão do seu código. Isso não só ajuda o seu “eu” do futuro, mas também qualquer pessoa que venha a trabalhar na sua aplicação.
Facilitação de Refatoração: Refatorar código é como remodelar uma casa. Com o TypeScript, você pode fazer mudanças estruturais com mais confiança. Se algo precisa ser alterado, o TypeScript aponta onde e como fazer isso.
Diferenças entre JavaScript e TypeScript
O JavaScript é flexível e tenta se recuperar de erros, mesmo quando realiza operações inválidas. Por exemplo, somar um número com um array resulta em uma string no JavaScript.
O TypeScript, por outro lado, é mais rigoroso. Ele não permite essas operações inválidas e lança erros durante a compilação, antes mesmo de executar o código.
Compilação e Utilização
O TypeScript precisa ser compilado para JavaScript antes de ser executado. Isso significa que você escreve em TypeScript, mas o navegador ou o ambiente Node.js executam o código JavaScript gerado pelo compilador.
Você pode usar o TypeScript em projetos com Node.js, Express (para criação de APIs) e bibliotecas como React.
Em resumo, o TypeScript é como um assistente atento, ajudando você a evitar erros, documentar seu código e facilitar a manutenção.





TypeScript / METODOS STRING 

INTRODUÇAO TYPESCRIPT # 
TIPOS DE DADOS 
como saber qual tipo de dados digite 
console.log(typeof ‘ .. .. .. ‘ ) exemplo 
let nome = 'gabriel' // STRING
console.log(typeof nome)
let nome = 'gabriel' // STRING
console.log(typeof nome)
let idade = 27 // NUMBER
console.log(typeof idade)
let altura = 1.87 // NUMBER
console.log(typeof altura)
let ativo = true // BOOLEAN
ativo =false // BOOLEAN
console.log(typeof ativo)
let cor ='azul'
console.log(typeof cor)
cor = null // TIPO NULL OU OBJECT
console.log(typeof null)
let sobrenome // UNDEFINED
console.log(typeof sobrenome)
sobrenome ='marquisio'
console.log(typeof sobrenome)
para instalar TYPESCRIPT digite no terminal (NPM INIT - Y )   ( npm install -D typescript)

PARA TRANFORMAR UM ARQUIVO TYPESCRIPT EM JAVASCRIPT DIGITE NO TERMINAL 
npx tsc  E O CAMINHO exemplo : 
npx tsc tipos-dados02.ts

para instalar  TS NODE  digite no terminal (npm install -D ts-node)
PARA EXECUTAR O TS NODE NO TERMINAL DIGITE : ( npx ts-node e o caminho ) exemplo
npx ts-node tipos-dados02.ts
Arquivo de configuração do TypeScript (tsconfig) #
para ver as configuraçoes do typescript digite no terminal ( npx tsc - - init )
para mandar um arquivo TS para pasta ja em JS procure nas configuraçoes do TS por 
"outDir": "./",   adicione uma pasta em JS EXEMPLO: "outDir": "./javascript", 



#    ARRAYS E LOOPS 
o que é um ARRAY é uma estrutura de dados que tem como objetivo armazenar um conjunto de dados semelhantes de forma ordenada . um ARRAY tambem pode ser chamado de lista .
a posiçao de cada item é representada por um indice , conhecido com index , começando sempre em “0 zero “ .
                                        Tamanho 5   
            0                 1                2               3                4
[ ‘ jose ‘ ] [ ‘ maria’ ] [ ‘pedro’] [ ‘ Joana’ ] [ ‘ andre’ ] 
( index ’ 0 zero’)    
DICA: o index do ultimo elemento de uma lista pode ser encontrado subtraindo o tamanho dela por 1 , na lista acima , o tamanho é  5  , logo 5 - 1 =  4  

COMO ACESSAR ITENS DE UM ARRAY 
EXEMPLO 1 
const guido = 'guido'
const joao = 'joao'
const maria = 'maria'
const pedro = 'pedro'
const listaUsuarios = ['guido','joao','maria','pedro']
const numeros = [123 , 456 , 789 ]
console.log(listaUsuarios[0])
console.log(listaUsuarios[1])
console.log(listaUsuarios[2])
console.log(listaUsuarios[3])
console.log(listaUsuarios[4])
console.log(numeros[1])
console.log(listaUsuarios)
listaUsuarios[2] = 'joana'
listaUsuarios[4] = 'ana'
console.log(listaUsuarios)
console.log(listaUsuarios[4])
TAMANHO DE UM ARRAY 
const frutas =['bananas','abacaxi','maça','pera','uva','manga']
console.log(frutas.length)
frutas[6]= 'melao'
console.log(frutas.length)
// TAMANHO -1
console.log(frutas)
let i = frutas.length - 1
console.log(frutas[i])
// o proximo indice a ser adicionado e sempre o tamanho do array 
frutas[frutas.length] = 'abacate'
console.log(frutas)


// TIPAGEM DE ARRAYS NO TYPESCRIPT
const listafrutas :string[] =['bananas','abacaxi','maça','pera','uva','manga']
listafrutas[listafrutas.length] = 'abacate'
const carros : string[] = []
carros[carros.length] = 'gol'
carros[carros.length] = 'palio'
carros[carros.length] = 'camaro'
console.log(carros)
const lista : number[]

Loop com While 
exemplo 
const listafrutas :string[] =['bananas','abacaxi','maça','pera','uva','manga']
let i = 0
while( i < listafrutas.length ) { 
console.log(listafrutas[i])
i++
}


# TUDO O QUE EU APRENDI NESTE MODULO # 

# AULA DE GIT BASICO #
para clonar um repositorio para seu terminal va na pasta selecionada e clique com o botao direito selecione (git bash here) depois escreva o codigo (git clone ) eo endereço SSH do seu repositorio  exmplo : 
( git clone git@github.com:piratadanaza/piratadanaza.git )

Para criar uma nova Branch e alterar ditgite no terminal (git checkout -b ‘’... ‘’ ) 
exemplo 😃 
(Home@DESKTOP-EMFNA00 MINGW64 ~/piratadanaza (main)
$ git branch
main
Home@DESKTOP-EMFNA00 MINGW64 ~/piratadanaza (main)
$ git checkout -b develop
Switched to a new branch 'develop'
Para alterar uma Branch existente digite somente ( git checkout “....” )
exemplo 😃  
Home@DESKTOP-EMFNA00 MINGW64 ~/piratadanaza (develop)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
Home@DESKTOP-EMFNA00 MINGW64 ~/piratadanaza (main)
$ git branch
develop
main   

Para sincronizar seu terminal com o git hub uma branch especifica digite no terminal o codigo 
git push origin “....” 
exemplo:
Home@DESKTOP-EMFNA00 MINGW64 ~/piratadanaza (develop)
$ git push origin develop
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
remote: 
remote: Create a pull request for 'develop' on GitHub by visiting:
remote:      https://github.com/piratadanaza/piratadanaza/pull/new/develop
remote:
To github.com:piratadanaza/piratadanaza.git
[new branch]      develop -> develop    

sempre que uma nova BRANCH  e criada ela replica tudo da antiga BRANCH 
Para jogar todas branchs criadas de uma vez digite o codigo 
(git push -u - - all )
Para iniciar um arquivo local(git local) crie uma pasta no seu PC ou NOTBOOK 
abra com vs code / novo terminal / no terminal digite / git init
Para ver o status do seu repositorio atualmente digite ( git status )
Para adicionar arquivo crackeado ao repositorio digite 
( git add “....” exemplo/ git add readme.md )
Para que as alteraçoes feita no codigo sejam atualizadas e preciso digitar o mesmo comando ( git add “....” exemplo/ git add readme.md )
Para que todos arquivos de uma vez sejam crackeados digite o codigo no terminal ( git add . )
Para excluir um arquivo crackeado digite (git reset ) 
Para excluir todos arquivos crackeados digite ( git reset . )
Para fazer um COMMIT digite o codigo (git  commit  -m “...” ) 
Defina um endereço de email no git. voce pode usar seu endereço de email fornecido pelo git hub ou qualquer endereço de email (git config --global user.email "YOUR_EMAIL")
Confirme se você definiu o endereço de e-mail corretamente no Git:
($ git config --global user.email
email@example.com )
Para fazer uma listagem de commits digite o codigo ( git log )
para adicionar meu repositorio local ao git hub digite esse codigo 
EXEMPLO : 
(git remote add origin git@github.com:piratadanaza/repositorio-local.git)
Para mandar repositorio local para o positorio remoto digite o codigo com a branch 
EXEMPLO
( git push -u origin main )
outro exemplo 
git status /git add . /git status /git commit “ alteraçao “ /git push origin main
PARA puchar um texto editado de um codigo compartilhado na mesma branch para o seu terminal digite o seguinte codigo ( git pull origin mail )
digite o codigo ( git pull) para puchar todas branch do seu terminal remoto
para enviar um pull request vai no seu git hub crie um pull request da sua branch para solicitar autorizaçao 
AULA DE NODE.JS
Para achar o seu documento no git bash digite este codigo ou com o botao direito abra com git bash here em cima da pasta 
(Home@DESKTOP-EMFNA00 MINGW64 ~/Desktop/teste (master)
$ ~/desktop/teste
Para executar um arquivo ou um projeto do (VS CODE / NODE J.S ) no git bash digite o codigo
bash: /c/Users/Home/desktop/teste: Is a directory
Home@DESKTOP-EMFNA00 MINGW64 ~/Desktop/teste (master)
$ node teste.js
ola pessoal!
Para inicializar um arquivo usando NPM, digitE ( NPM INIT ) ou ( NPM INIT -Y )
Para usar uma biblioteca nativa do node.js va no site verifique as bibliotecas disponiveis 
exemplo :
 const crypto = require ('crypto')  // comonsJS //
console.log(crypto.randomUUID())
( https://nodejs.org/docs/latest/api/ )
Para executar no terminal digite node e o nome da pasta exemplo : 
Home@DESKTOP-EMFNA00 MINGW64 ~/Desktop/teste-node (master)
$ node index.js
dce8cce-dd50-4679-bcbe-4c327447293a
quando e feito pela forma mais moderna de exportaçao é preciso fazer uma configuraçao a mais no packjason.js 
exemplo:
import *as crypto from ‘crypto’ //ESModule
console.log(crypto.randomUUID())
“type”: “module”
baixar biblioteca externa site: 
https://www.npmjs.com/
nunca utilizar ( -g )para intalar em projetos especificos 
usando uma biblioteca externa exmplo 😃 
import * as cowsay from "cowsay"
let saudacao= cowsay.say({ text: 'ola rapeize do DEV ' });
console.log (saudacao) ,para executar ( index node.js )
para baixar os modulos pelo terminal digite o codigo 
npm install ou npm i
para desinstalar uma biblioteca (pacote ) digite o seguinte codigo no terminal exemplo ;
“ npm uninstall cowsay  “
para baixar as na dependeincia e executar somente um pacote digite ;
exemplo
npm install -D "cowsay" 

 # INTRODUÇAO VARIAVEIS #

 # VAR #
var é o tipo de variável que possui o escopo global. Isso significa que ela é visível em qualquer lugar em que é chamada, independente do seu valor.
LET 
Let é o tipo de variável implementado a partir do EcmaScript 6 (ES6) e possui escopo local. Diferente do var, ela só é válida dentro do bloco em que foi declarada. Tanto var, quanto let podem ter seus valores reatribuídos.
Const
Const também é um tipo implementado a partir do EcmaScript 6 (ES6) e possui o mesmo escopo do let, porém o valor definido inicialmente para uma const não pode ser reatribuído. Representa uma constante
console.log( ) é usado para executar o comando no terminal 
 exemplo VAR 
var qualquercoisa = 'gabriel'
console.log(qualquercoisa)
EXEMPLO LET/ CONST :
let nome = 'gabriel'
let idade = '27 anos'
console.log(nome , idade)
const email = 'gbrlmarquizio@gmail.com'
console.log(email)
VAR / LET podem ser reatribuidos CONST nao pode ser restribuido 
ESCOPO  EXEMPLO 
{
let nome ='João'
var idade = 33
const cor = 'azul'
}
console.log(cor)
no exemplo acima LET/CONST possuem escopo local , ele so é valido dentro do escopo que foi definido 
no exemplo a seguir o  LET   é executado quando console.log é executado dentro do escopo 
const nome = 'gabriel'
let idade = 27
{
const nome = 'Maria'
console. log(nome, idade)
}
console. log (nome)

           neste exemplo a seguir vemos que const nao pode ser  alterado 
//let nome 
//console.log(nome)
//nome = 'gabriel marquisio'
//console.log(nome)
//let numero 
// {
//    const idade =34 
//  numero = idade
// }
//console.log(numero)

const texto ='bhsbhsbh'
exercicio 01 aula de variaveis 
//declare uma variavel imutavel
//armazene o nome da cidade onde vc mora 
//imprima o valor dessa variavel
const cidade =' rio de janeiro'
console.log(cidade) 
executar no terminal ( node ‘ nome do arquivo ‘ ) exemplo ;
node exercicio01.js 
operadores aritmeticos 
(soma  + ) ( subtraçao  - ) (multiplicaçao  * ) (divisao  / )
// + soma 
// - subtraçao
// * multiplicaçao
// / divisao
let numero1 = 7 
let numero2 = 10
let soma = numero1 + numero2
let subtracao = numero2 - numero1
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2 
console.log(divisao)
executar no terminal ( node operadores-aritmeticos.js )
EXERCIO 02 VARIAVEIS 
// declare uma variavel multavel 
// armazene sua idade 
// imprima o valor dessa variavel 
// retribua um valor a essa variavel que represente o dobro da sua idade 
// improma o novo valor dessa variavel 
let idade = 27 
console.log(idade)
idade = idade * 2
console.log(idade)
executar no terminal ( node exercio02.js )
OPERADOR MOD ( % )
let nuemero1 = 12
let numero2 = 4
let restoDadivisao = nuemero1 % numero2
console.log(restoDadivisao) 
digitar no terminal ( node operador-mod.js ) 
OPERADORES DE ATRIBUIÇAO 
(+=) ( -=) (*=) (/=) 
// += soma do valor da esquerda com o valor da direita
// -= subrtraçao do valor da esquerda com o valor da direita
// *= multiplicaçao do valor da esquerda com o valor da direita
// /= divisao do valor da esquerda com o valor da direita
let numero1 = 10
//numero1 = numero1 + 8
//numero1 += 8
//numero1 = numero1 - 5
//numero1 -= 5
//numero1 = numero1 * 3 
//numero1 *= 3
//numero1 = numero1 / 2
numero1 /= 2
console.log(numero1) 
digitar no terminal ( node operadores-atribuicao.js)
INCREMENTO - DECREMENTO 
//let x = 1
//x++
//x++
//console.log(x)
//let y = 10
//y--
//y--
//console.log(y)
//let x = 1
//let y = ++x
l//et y = --x
//console.log(x,y)
digitar no terminal ( node incremento-decremento.js )
Operadores de comparação
( === ) operaçao de comparaçao de igualdade
( !== ) operador de comparaçao de diferença
( < ) operador de comparaçao menor que
( > ) operador de comparaçao maior que
( >= ) operador de comparaçao maior ou igual 
( <=) operador de comparaçao menor ou igual 
let numero1 = 12 
let numero2 = 12
let comparacao = numero1 === numero2
comparacao = numero1 !== numero2
comparacao = numero1 < numero2
comparacao = numero1 > numero2
comparacao = numero1 >= numero2
comparacao = numero1 <= numero2
console.log(comparacao)
digitar no terminal ( node operedores-comparacao.js )

 # CONTATENAÇAO E STRING #

let nome = 'gabriel '
let sobrenome = 'marquisio'
let nomecompleto = nome + sobrenome
console.log(nomecompleto)
EXERCICIO 03 VARIAVEIS 
// DECLARE UMA VARIAVEL NOME E UMA IDADE 
// IMPRIMA A FRASE MEU NOME É ( XXXX ) E TENHO ( XXXX ) ANOS 
 let nome = ' gabriel '
let idade =  27 
let sobremin = 'meu nome é ' + nome + 'tenho ' + idade + ' anos de idade'
console.log(sobremin)
digite no terminal ( node exercicio03.js )

EXERCICIO 04 VARIAVEIS 
// DADO O CODIGO ABAIXO , REFATORE USANDO O TEMPLATE STRING
// IMPRIMA A FRASE MEU NOEM É XXXX TENHO XXXX ANOS 
let nome = ' gabriel '
let idade =  27 
// let sobremin = 'meu nome é ' + nome + 'tenho ' + idade + ' anos de idade'
let sobremin = meu nome é ${nome } tenho  ${idade} anos de idade
console.log(sobremin)
DIGITE NO TERMINAL ( node exercicio04.js)

  # INTRODUÇAO TYPESCRIPT # 

  # TIPOS DE DADOS #
como saber qual tipo de dados digite 
console.log(typeof ‘ .. .. .. ‘ ) exemplo 
let nome = 'gabriel' // STRING
console.log(typeof nome)
let nome = 'gabriel' // STRING
console.log(typeof nome)
let idade = 27 // NUMBER
console.log(typeof idade)
let altura = 1.87 // NUMBER
console.log(typeof altura)
let ativo = true // BOOLEAN
ativo =false // BOOLEAN
console.log(typeof ativo)
let cor ='azul'
console.log(typeof cor)
cor = null // TIPO NULL OU OBJECT
console.log(typeof null)
let sobrenome // UNDEFINED
console.log(typeof sobrenome)
sobrenome ='marquisio'
console.log(typeof sobrenome)
para instalar TYPESCRIPT digite no terminal (NPM INIT - Y )   ( npm install -D typescript)

PARA TRANFORMAR UM ARQUIVO TYPESCRIPT EM JAVASCRIPT DIGITE NO TERMINAL 
npx tsc  E O CAMINHO exemplo : 
npx tsc tipos-dados02.ts

para instalar  TS NODE  digite no terminal (npm install -D ts-node)
PARA EXECUTAR O TS NODE NO TERMINAL DIGITE : ( npx ts-node e o caminho ) exemplo
npx ts-node tipos-dados02.ts
Arquivo de configuração do TypeScript (tsconfig) #
para ver as configuraçoes do typescript digite no terminal ( npx tsc - - init )
para mandar um arquivo TS para pasta ja em JS procure nas configuraçoes do TS por 
"outDir": "./",   adicione uma pasta em JS EXEMPLO: "outDir": "./javascript", 
CONDICIONAIS #

condicional IF 
exemplo de como funciona  ( IF )

const idade : number=27

// validar se a condiçao e verdadeira 
if (idade >= 18 )  { 

// executar o que esta entre o escopo 
console.log('é maior de idade')
}
console.log('fim do codigo')

 # CONDICIONAL ( IF ) E CONDICIONAL ( ELSE ) #
const idade : number=17
// validar se a condiçao e verdadeira 
if (idade >= 18 )  { 
// executar o que esta entre o escopo do IF caso a condiçao seja verdadeira 
console.log('é maior de idade')
} else 
// executar o que estiver entre o ESCOPO DO ELSE caso a condiçao seja FALSA 
{console.log (' é menor de idade ')}
console.log('fim do codigo')
Condicionais IF, ELSE e ELSE IF #
if  (idade < 18 ) {
console.log('menor de idade')
} else if (idade <= 65) {
console.log('adulto')
} 
else {console.log('idoso')
} 

exercicio 01 condicionais 
// escreva um programa que receba uma media escolar e imprima o resultado
// conforme as condiçoes abaixo :
// media menor que 4 --> reprovado 
// media maior ou igual a 4 e menor que 7 --> recuperçao 
// media maior ou igual a 7 --> aprovado 

const nota : number = 7

if (nota  < 4 ) { console.log('reprovado') } 

else if ( nota < 7 ){ console.log ('recuperaçao') }

else  { console.log('aprovodao') }

 conceitos  # Truthy e Falsy ( verdadeiro ou falso )

const idade = 10
const nome = ' gabriel'
let cor
// truthines
// truthy --> tudo que nao é falsy 
// falsy --> false , 0 , '' , undefined , NaN
if ( cor ) { console.log('verdadeiro') }  
else {console.log('falso') }


    # TERNARIO #

     st numero = 2
const  parOUimpar = numero % 2 
const resultado = parOUimpar === 0 ? ('é par ') : ('é impar')
console.log(resultado)

EXERCICIO 02 CONDICIONAIS 
//  o sistema de uma instituiçao financeira apresentou um problema 
// imprimir a mensagem do saldo de um cliente , o saldo era de 1 real e o sistema 
// estava imprimindo seu saldo é de " r$ 1 reais " com o nome da moeda no plural, mas sabemos
// que o correto seria " 1 real " e seria no plural apenas se o saldo fosse maior que 1 .
// crie um progrma que receba o saldo e imprima a mensagem < de acordo com seu valor .
const saldo : number= 5
// seu saldo é R$ XXXX real ou reais 
const unidade = saldo === 1 ? 'real '  : 'reais' 
console.log(seu saldo é R$ ${saldo} ${unidade} )

# OPERADOR DE NEGAÇAO 
exemplo 
const ativo : boolean = false
if (!ativo) 
{console.log('verdadeiro')}
else {console.log('falso')}
// const nome = 'guido'
// if (!nome) {
// console.log ('o nome é obrigatorio ) }
// else { console.log('ola ${nome}') }
Operador lógico && (AND)
exemplo 
const temIngresso : boolean = true 
const idade : number = 17 
const censura : number  = 16

// OPÉRADOR LOGICO AND (&&)
// TESTA TODAS AS CONDIÇOES E TODAS PRECISAM SER VERDADEIRAS  

if (temIngresso && idade >= censura ) 
{console.log('pode entrar')}
else {
console.log('barrado')
}

Operador lógico ( || ) (OR)
exemplo 
const temIngresso : boolean = true 
const idade : number = 17 
const censura : number  = 16
const estacomOSpais : boolean = false 

// OPÉRADOR LOGICO AND &&
// TESTA TODAS AS CONDIÇOES E TODAS PRECISAM SER VERDADEIRAS
// OPERADOR LOGICO OR - || 
// TESTA SE PELO MENOS UMA CONDIÇAO É VERDADEIRA

if (temIngresso  ) 
{ if (idade >= censura || estacomOSpais ) console.log('pode entrar')
else { console.log('barrado')}
} else {console.log('barrado') }

PRATICA COM OPERADORES LOGICOS 
const temIngresso : boolean = true 
const idade : number = 17 
const censura : number  = 16
const estacomOSpais : boolean = false 

( &&  AND   / ||  OR )

if (temIngresso && ( idade >= censura || estacomOSpais)) {
console.log('pode entrar')}
else {console.log('barrado') }    

 #    ARRAYS E LOOPS 

o que é um ARRAY é uma estrutura de dados que tem como objetivo armazenar um conjunto de dados semelhantes de forma ordenada . um ARRAY tambem pode ser chamado de lista .
a posiçao de cada item é representada por um indice , conhecido com index , começando sempre em “0 zero “ .
                                        Tamanho 5   
            0                 1                2               3                4
[ ‘ jose ‘ ] [ ‘ maria’ ] [ ‘pedro’] [ ‘ Joana’ ] [ ‘ andre’ ] 
( index ’ 0 zero’)    
DICA: o index do ultimo elemento de uma lista pode ser encontrado subtraindo o tamanho dela por 1 , na lista acima , o tamanho é  5  , logo 5 - 1 =  4  

COMO ACESSAR ITENS DE UM ARRAY 

EXEMPLO 1 
const guido = 'guido'
const joao = 'joao'
const maria = 'maria'
const pedro = 'pedro'
const listaUsuarios = ['guido','joao','maria','pedro']
const numeros = [123 , 456 , 789 ]
console.log(listaUsuarios[0])
console.log(listaUsuarios[1])
console.log(listaUsuarios[2])
console.log(listaUsuarios[3])
console.log(listaUsuarios[4])
console.log(numeros[1])
console.log(listaUsuarios)
listaUsuarios[2] = 'joana'
listaUsuarios[4] = 'ana'
console.log(listaUsuarios)
console.log(listaUsuarios[4])
TAMANHO DE UM ARRAY 
const frutas =['bananas','abacaxi','maça','pera','uva','manga']
console.log(frutas.length)
frutas[6]= 'melao'
console.log(frutas.length)
// TAMANHO -1
console.log(frutas)
let i = frutas.length - 1
console.log(frutas[i])
// o proximo indice a ser adicionado e sempre o tamanho do array 
frutas[frutas.length] = 'abacate'
console.log(frutas)


// TIPAGEM DE ARRAYS NO TYPESCRIPT

const listafrutas :string[] =['bananas','abacaxi','maça','pera','uva','manga']
listafrutas[listafrutas.length] = 'abacate'
const carros : string[] = []
carros[carros.length] = 'gol'
carros[carros.length] = 'palio'
carros[carros.length] = 'camaro'
console.log(carros)
const lista : number[]

Loop com While 
exemplo 
const listafrutas :string[] =['bananas','abacaxi','maça','pera','uva','manga']
let i = 0
while( i < listafrutas.length ) { 
console.log(listafrutas[i])
i++

}






