/*
Nas aulas passadas foram vistas várias formas de se criar um objeto e como manipula-lo. Agora iremos aprender a criar um construtor.

Seguindo o exemplo da criação de um criador de médias dos alunos de uma turma, vamos criar vários alunos dentro de um array.
*/

var calcMedia = function (){
    return (this.nota1 + this.nota2) / 2
}


var alunos = [{nome:"Erick",
               nota1: 8,
               nota2:7,
               media: calcMedia
}]

//Agora, vamos invocar para observarmos no console.

// console.log(alunos[0])
// console.log(alunos[0].media())

//Para simplificar as linhas acima, vamos coloca-lo dentro de uma variável

var aluno0 = alunos[0]

console.log(aluno0)
console.log(aluno0.media())

// Ao observar o console, vemos que está tudo bem. Então o que vim aprender nesta aula? O problema inicia quando pensamos em uma turma com mais de 30 alunos, seria muito fácil acontecer um erro de digitação ou qualquer coisa parecida. Uma das maneiras de se reverter isso, é a seguinte:


var criarAluno = function (nome,n1,n2){
    return { nome: nome, nota1: n1, nota2:n2, media: calcMedia }
}

//Agora que temos nossa function criarAluno pronta, é só usalas de forma simples

var pedro = criarAluno("Pedro",7,8)

console.log(pedro)
console.log(pedro.media())

// Agora, para eu criar os alunos da turma, é bem mais simples.

var turma = [criarAluno("Joaquim",7,8), criarAluno("Kartylla",5,9),criarAluno("João",4,5)]

console.log(turma[0])
console.log(turma[0].media())

console.log(turma[1])
console.log(turma[1].media())

console.log(turma[2])
console.log(turma[2].media())

// Também é possível utilizar a estrutura de repetição 'for'.

for (var aluno of turma){
    console.log(`Olá, ${aluno.nome}, sua primeira nota é ${aluno.nota1}, a segunda é ${aluno.nota2} e sua média final é ${aluno.media()}`)
}

// Usando o 'for' que vai varrer o Array até o seu final, eu nao preciso escrever vários 'console.log' como no exemplo mais acima.


// Em todas essas functions que criamos o retorno já é um objeto propriamente dito. Vamos ver uma nova maneira de criar um objeto sem utilizar um retorno de objeto.

function exemplo1 (nome,n1,n2){
    
    this.nome = nome
    this.nota1 = n1
    this.nota2 = n2

    this.media = function (){
        return (this.nota1+this.nota2) / 2
    }
}

// Para que eu possa criar um novo aluno apartir dessa nova function, eu preciso invoca-la de uma forma diferente.

var a = new exemplo1("Juarez", 9, 8)

console.log(a)
console.log(a.media())

// Agora nós criamos um OBJETO a partir de uma FUNCTION, isto é chamado de construtor de um objeto. Sempre que eu for usar dessa forma, é OBRIGATÓRIO o uso do 'new'. Isso é chamado também de instancia, é pegar o modelo de um objeto e o transforma de fato em um objeto