/*
No fim da aula passada, vimos o incremento e o decremento. O problema dessas 2 operações é que elas conseguem adicionar apenas de 1 em 1 o valor. Mas e se eu precisar adicionar valores maiores que 1, como eu faço?

Veremos as atribuições de uma maneira mais livre e maleável de se trabalhar.
 */


/*
Antes foi visto que 'a++' é a mesma coisa que 'a = a + 1', e agora, nas atribuições, também veremos que é igual a 'a += 1'. Segue exemplos.
*/

var ex1 = 30
ex1++

console.log(ex1)
// Até o momento, nosso valor é 31, certo?

ex1 += 1
console.log(ex1)
// Nosso valor já passou a ser 32!

/*
Mas as atribuições não era pra adicionarmos valores maiores que 1?
*/

var ex2 = 15
ex2 += 5

console.log(ex2)
// Agora adicionamos valores maiores que 1

/*
O mesmo serve para TODAS as operações aritméticas.
*/

var ex3 = 10
ex3 -= 2

console.log(ex3)

//Multiplicação
var ex4 = 10
ex4 *= 2

console.log(ex4)

//Divisão
var ex5 = 10
ex5 /= 2

console.log(ex5)

//Módulo
var ex6 = 12
ex6 %= 10

console.log(ex6)

/*
Então fica bem claro que a forma que você modifica o valor das variáveis no JS são iguais, mas as vezes, escrita de formas diferentes.
*/

