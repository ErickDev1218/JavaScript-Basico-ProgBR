/*
Na escrita de strings, tanto faz usar aspas simples ou duplas, mas caso você necessite utilizar de alguma delas no texto escrito, o ideal é alternar entre elas.
*/

var str1 = "Isso é igual"
var str2 = 'A isso aqui'


/*
As strings em JS tem um comportamento muito peculiar quando usadas com o sinal de +. Vimos anteriormente que o sinal de + seria a adição, aqui, o sinal de + vale como CONCATENAÇÃO.
*/

var ex1 = 'Texto qualquer'
ex1 += ' final do texto qualquer'

console.log(ex1)

// Quando falamos em concatenação, devemos ter muita atenção em como o texto vai ser imprimido na tela, então cabe atenção na hora de escrever.

/*
Vale lembrar também que a única operação que a string consegue fazer é com o sinal de +, qualquer outro valor disposto aqui retornaria um NaN (not a number).
*/

var ex2 = 'Outro texto qualquer'
ex2 *= 'Final do outro texto'

console.log(ex2)
//NaN