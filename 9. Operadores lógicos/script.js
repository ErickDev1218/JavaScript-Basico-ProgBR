/*
Os operadores lógicos são aqueles que vão retornar true ou false. Eles normalmente são utilizados para verificar sentenças.

Os operadores lógicos são:

&& -> que é lido como 'e'.
|| -> que é lido como 'ou'.
! -> que é a negativa.

Vejamos exemplos práticos.
*/

// var idade = 25

// var maior20 = idade > 20
// var menor30 = idade < 30

// var entre = maior20 && menor30

// console.log("Idade maior que 20?", maior20)
// console.log("Idade menor que 30?", menor30)

// console.log("A idade está entre 20 e 30 anos?", entre)

//Usando o && SOMENTE terei retorno TRUE caso as duas afirmações sejam TRUE, em qualquer outra hipótese, o resultado será false.






// var idade1 = 10
// var idade2 = 63

// var menor10 = idade1 <= 10
// var maior65 = idade2 >= 65

// var entre = menor10 || maior65

// console.log("Sua idade é menor ou igual que 10 anos?", menor10)
// console.log("Sua idade é maior ou igual que 65 anos?", maior65)

// console.log("Sua idade é menor ou igual a 10 anos ou maior ou igual a 65 anos?", entre)

// if(entre == true){
//     console.log("Parabéns, você tem acesso gratuito!")
// }else{
//     console.log("Você precisará pagar para usar, sinto muito.")
// }

//Quando usado o || terei resultado TRUE sempre que QUALQUER valor seja TRUE, terei resultado FALSE se TODOS os valores forem FALSE.





// var idade = 30

// var teste = idade <= 30

// console.log("Você tem idade menor ou igual a 30 anos?", teste)

// //A negação é simplesmente inverter o valor usando o sinal de '!'.

// console.log("Você tem idade menor ou igual a 30 anos?", !teste)





var idade = 22

// Como não tem como uma pessoa ter idade maior que 20 e ao mesmo tempo menor que 20, uma sentença negativa a outra. Se uma é verdadeira, a outra se obriga a ser falsa.

var maior20 = idade >= 20
var menor20 = !maior20

console.log("Sua idade é maior que 20?", maior20)
console.log("Sua idade é menor que 20?", menor20)

