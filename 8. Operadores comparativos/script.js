/*
Os operadores comparativos estão diretamente ligado ao tipo boolean (true ou false), já que o mesmo faz comparações.

Até o momento vimos muito a estrutura de 'var a = 1' esse '=' não quer dizer exatamente igual, quer dizer 'recebe'. Por isso a variável a passa a valer 1.

Mas como eu faço para de fato comparar se uma coisa é realmente igual a outra?

Existe duas formas de comparar IGUALDADE. Segue exemplo.
*/

var ex1 = 2
var ex2 = 3

console.log(ex1 == ex2)
//Aqui, o '==' assume o valor de 'igual'. O resultado é false pois o valor passado ao ex1 é diferente de ex2.

/* 
Vejamos outro exemplo.
*/

var ex3 = 3
var ex4 = "3"
//Aqui, vemos claramente que o valor passado ao ex3 é do tipo NUMBER e o valor de ex4 é do tipo STRING, mas será que serão iguais?

console.log(ex3 == ex4)

//O resultado foi true, pois ele comparou apenas os valores e não o tipo de dado. Caso eu precise comparar o valor e o tipo de dado, eu devo usar '==='

console.log(ex3 === ex4)
//Agora sim o resultado foi false!

/*
Como existe os comparativos para igual, existe o inverso, que será o diferente. Segue exemplo.
*/

var ex5 = 5
var ex6 = 5

console.log(ex5 != ex6)
//Resultado false pois eles não são diferentes, são iguais!

var ex7 = 5
var ex8 = "5"

console.log(ex7 !== ex8)
//Resultado true pois eles são diferentes! Tendo noção que aqui também está sendo testado o tipo do dado!

/*
Agora começaremos a falar sobre os comparativos de maior/maior igual ou menor/menor igual.
*/

var exemplo1 = 5
var exemplo2 = 4

console.log(exemplo1 > exemplo2)
//Resultado true pois o valor de 1 é maior que o valor de 2

var exemplo3 = 5 
var exemplo4 = 5

console.log(exemplo3 >= exemplo4)
//Aqui o resultado ainda é true pois satisfaz algum dos testes. O valor de 3 é maior OU igual ao de 4.

var exemplo5 = 4
var exemplo6 = 5

console.log(exemplo5 < exemplo4)
//Resultado true pois o valor de 5 é menor que o valor de 4

var exemplo7 = 4 
var exemplo8 = 4

console.log(exemplo7 <= exemplo8)
//Aqui o resultado ainda é true pois satisfaz algum dos testes. O valor de 7 é menor OU igual ao de 8.