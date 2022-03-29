/*
    Array

Um array é um sequência de variáveis dentro de um único elemento. Um único elemento com varias variáveis dentro. Mas como eu crio um Array?

Existe duas maneiras de se criar um array. Segue exemplo.


var vetor = new Array()

console.log(vetor)

Caso você observe isso no console, você verá '[]', um Array.

Agora como eu insiro valores dentro desse Array?

var vetor = new Array("Erick", "Pedro", "Jorge")

console.log(vetor)

Dentro de um array, cada elemento possui seu index, o local onde está armazenado, e todo array começa no index 0. Veja o exemplo 

var vetor = new Array("Erick", "Pedro", "Jorge")

console.log(vetor[0])
console.log(vetor[1])
console.log(vetor[2])

Todo Array possui um length (comprimento), e é importante entender sobre pois algumas vezes iremos precisar usar o tamanho do array.


A outra maneira de criar um array é assim:


var vetor = []

console.log(vetor)

E da mesma forma, eu passo valores para esse array, utilizo de seu index e também do seu length.

Agora vamos criar um exemplo para praticar o uso básico de um array.

Vamos supor que eu precise criar uma lista com o nome dos alunos de uma turma e eu precise saber o nome de cada um depois. Como eu faria?


var alunos = ["Erick", "Pedro", "Manel", "Juarez", "Miguel", "Jorge"]

for (var i = 0; i < alunos.length; i++){
    console.log(alunos[i])
}

Agora, não importa se eu inserir ou tirar o nome de algum aluno da lista, eu não irei precisar mudar meu algoritmo em nenhuma ocasião.

Mas para o Array, existe dois 'for' especial. Vejamos exemplos:


var alunos = ["Erick", "Pedro", "Manel", "Juarez", "Miguel", "Jorge"]

for (var i in alunos){
    console.log(i)
}

Aqui vemos que esse tipo de laço for usando o 'in' faz com que o INDEX do array seja jogado para dentro de 'i' até o fim do array sem que eu precise usar o length.



var alunos = ["Erick", "Pedro", "Manel", "Juarez", "Miguel", "Jorge"]

for (var i of alunos){
    console.log(i)
}

Agora já percebemos que usando o 'of' ele não tá mais pegando o INDEX, ele está jogando para o 'i' o elemento que está no index até o fim do array.

Ou seja com o 'in' ele vai pegar o INDEX, com o 'of', ele vai pegar o elemento.

*/

var alunos = ["Erick", "Pedro", "Manel", "Juarez", "Miguel", "Jorge"]

for (var i of alunos){
    console.log(i)
}


for (var i in alunos){
    console.log(i)
}