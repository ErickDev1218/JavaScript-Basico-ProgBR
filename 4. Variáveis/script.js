/*
Variáveis em JS são espaços na memórias que vão guardar uma determinada informação. Por hora, diremos que essa memória só pode guardar apenas uma informação por vez.

Certo, mas como eu faço isso?

Existe duas maneiras de criar uma variável. No início sempre usaremos a palavra reservada 'var' e após, usaremos o nome que queremos passar dar a essa variável.
*/

var primeiraVariavel = 'Hello world'

/*
Também é possivel declarar uma variável sem passar nenhum valor nela, e até então, ela será UNDEFINED (indefinida), e depois chama-la passando um valor.
*/

var semValor


semValor = 'Agora eu tenho valor!'

/*
Mas como o próprio nome sugere, uma variável pode variar da forma que o desenvolvedor quiser. Vejamos um exemplo
*/

var x = 'Em 2021, eu completei 21 anos'
console.log(x)

/*
Nesse caso, o que seria apresentado no console seria justamente o que está disposto dentro da variável x. Observe agora.
*/

x = 'Agora que o ano é 2022, eu completei 22 anos'
console.log(x)

/*
Agora temos a variável 'x' apresentando a nova frase que foi passada a ela. Ou seja, o valor de x aponta para dois valores dependendo da ordem que o código foi escrito.
*/


