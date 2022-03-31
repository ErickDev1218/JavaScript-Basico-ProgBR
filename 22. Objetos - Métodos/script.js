/*
Na aula passada vimos a sintaxe de um objeto e como funciona seu comportamento. Vimos também como atribuir nomes de variáveis aos index, esses nomes são chamados de PROPRIEDADES. Nessa aula, vamos aprender a introduzir MÉTODOS dentro de um objeto.
*/

var exemplo1 = {
    nome: "Erick",
    idade: 22,
    sexo: "Masculino",
    notas: [7, 8, 3]
}

// Assim ficou a aula passada, a construção de um objeto normal. Mas o que de fato é um método? O método é uma function dentro de um objeto, veja exemplo.

var exemplo2 = {
    nome: "Pedro",
    idade: 25,
    sexo: "Masculino",
    notas: [6, 7, 8],
    media: function (n1, n2, n3) {
        return (n1 + n2 + n3) / 3
    }
}

// Nesse caso usamos uma função anonima para introdução desse método. E como eu a invoco?

console.log(exemplo2)

// Aqui podemos ver no console que "media" é de fato uma function!

console.log(exemplo2.nome)
console.log(exemplo2.idade)

// Mas essa function precisa que seus argumentos sejam passados para que ela funcione, como posso fazer isso?

console.log(exemplo2.media(exemplo2.notas[0], exemplo2.notas[1], exemplo2.notas[2]))

// Imagine agora um caso onde você precise mudar o algoritmo do seu método, para apenas um exemplo seria tranquilo, mas e se tivessemos 50 exemplos? Dessa forma, foi estudado outra forma de fazer isso.

// Primeiro vamos entender o uso do 'this' para que não se faça necessário eu precisar passar algum argumento ao invoca-la.


/* var exemplo3 = {
    nome: "Antonio",
    notas: [3, 4, 8],
    media: function () {
        return (notas[0] + notas[1] + notas[2]) / 3
    }
}

console.log(exemplo3.media()) */


// Aqui o JS deu um erro porque ele NÃO consegue entender de onde esse 'notas[0] + notas[1] + notas[2]' vem, e é aqui que entra o método 'this'. O 'this' vai fazer referência sempre ao objeto que ele esta, ou seja, em cada local, eu posso ter o 'this' fazendo referência ao seu próprio objeto!


var exemplo3 = {
    nome: "Antonio",
    notas: [3, 4, 8],
    media: function () {
        return (this.notas[0] + this.notas[1] + this.notas[2]) / 3
    }
}

console.log(exemplo3.media())


// Como visto nas aulas de FUNCTION, vimos que podemos usa-las da mesma maneira que usamos variáveis, portanto, eu posso cria-la antes e apenas invoca-la!

var calcMedia = function () {
    return (this.notas[0] + this.notas[1]) / 2
}

var aluno1 = {
    nome: "Erick",
    notas:[4,7],
    media: calcMedia
}


var aluno2 = {
    nome: "João",
    notas:[6,9],
    media: calcMedia
}

var aluno3 = {
    nome:"Kartylla",
    notas:[8,9],
    media: calcMedia,
}

console.log(`Olá, ${aluno1.nome}. Sua primeira nota foi ${aluno1.notas[0]} e a segunda foi ${aluno1.notas[1]}, portanto, sua média final é ${aluno1.media()}`)

console.log(`Olá, ${aluno2.nome}. Sua primeira nota foi ${aluno2.notas[0]} e a segunda foi ${aluno2.notas[1]}, portanto, sua média final é ${aluno2.media()}`)

console.log(`Olá, ${aluno3.nome}. Sua primeira nota foi ${aluno3.notas[0]} e a segunda foi ${aluno3.notas[1]}, portanto, sua média final é ${aluno3.media()}`)


// Aqui ja vemos que a function foi invocada e o 'this' fez referência ao local onde ele foi chamado. Portanto, caso eu precise mudar meu algoritmo, basta eu mudar uma única vez lá na função e assim, meu código também ficou bem mais 'limpo'!
