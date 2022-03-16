/*
Os dados por sua natureza sempre pertecerão à algum tipo. É importante sabermos exatamente qual é cada tipo e como eles funcionam.

Existe uma funcionalidade no JS que nos ajudará a distinguir quais são os tipos de dados, ele é o "typeof", ou seja, quando houver uma dúvida sobre qual tipo é aquele dado, podemos usar 'typeof dado' e o retorno será o tipo de dado.
*/

/*
    1º. String

Até o momento nós trabalhamos básicamente com STRING. String é um conjunto de caracteres que está normalmente colocado entre "" ou ''. Vejamos o exemplo.
*/

var exemplo1 = "Isto é uma string"
console.log(typeof exemplo1)

/* 
Nas STRINGS existe uma possibilidade de uso que devemos ter cuidado, que é a CONCATENAÇÃO, que nada mais é que uma junção LITERAL do que está sendo escrito.
*/

var exemplo2 = "Esse é o começo da frase"
var exemplo3 = "Esse é o final da frase"
console.log(exemplo2 + exemplo3)

/*
Mas porque devo ter cuidado?
Caso você escreva números dentro de uma string (dentro de ""), esse número será considerado uma string, e em operações matemáticas, poderá ocasionar um bug. Segue exemplo. 
*/

var exemplo4 = "1"
var exemplo5 = "2"

//De uma forma bem obvia, sabemos que 1+2 é igual a 3. Mas vamos observar o console.

console.log(typeof exemplo4)
console.log(typeof exemplo5)

console.log(exemplo4 + exemplo5)

/*
    2º. Number

O number é o mais fácil e prático de entender por ele é literalmente um número. Segue exemplo.    
*/

var exemplo6 = 1
console.log(typeof exemplo6)

/*
Aqui, a CONCATENAÇÃO não faz tanto medo e as operações matemáticas irão funcionar sem nenhuma dificuldade. 
*/

var exemplo7 = 1
var exemplo8 = 2

console.log(typeof exemplo7)
console.log(typeof exemplo8)
console.log(exemplo7 + exemplo8)

/*
    3º. Undefined
    
O tipo undefined também é bem simples de entender, pois ele é o tipo indefinido. Ou seja, sempre que eu criar uma variável e não atribuir NENHUM valor, ele será indefinido pois o JS não tem certeza do que exatamente está nela. Segue exemplo.
*/

var ex1 = 

console.log(typeof ex1)


/*
    4º. Null
    
O tipo null é o tipo vazio. Antes só sabiamos substituir valores dentro de uma variável, agora, com o tipo null nós podemos deixar a variável realmente VAZIA.

Ora, mas qual a diferença pro tipo undefined?
No tipo undefined o JS não sabe se há ou não algum valor naquela variável, por isso é indefinido. Já no tipo null eu estou afirmando ao JS que aquela variável está VAZIA.

Segue exemplo.
*/

var ex2 = null
console.log(ex2)

//Caso eu utilize o typeof aqui, o console retornará um tipo 'object' que ainda veremos no futuro.

/*
    5º. Boolean
    
O tipo boolean tem apenas duas opções, sendo elas TRUE ou FALSE, ela é normalmente usado com estruturas de condicionais para efetivar testes lógicos. Segue exemplo.
*/

var ex3 = true
console.log(typeof ex3)

//Existe alguns outros tipos de dados, mas por agora, estes serão os tipos mais abordados, no futuro, estudaremos mais sobre os outros tipos.