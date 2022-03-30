/*
    Objetos
    
Essa é uma aula introdutória à objetos.
Para criarmos um objeto devemos usar uma forma bem parecida com o Array, veja a seguir:
*/

var ex1 = [] // Isso seria um Array

var ex2 = {} // Isso é um objeto

/*
A grande vantagem do Objeto é poder nomear os index dele. No array, os index eram sempre nuúmeros começando com o zero, no Objeto chamamos de propriedades e eu posso nomea-las!
*/

var ex3 = {nome: "Erick", idade: 22, sexo: "Masculino"}

console.log(ex3)


// Mas como eu chamo uma parte especifica de um Objeto?

console.log(ex3.nome)
console.log(ex3["idade"])

/*
Um Objeto, pode receber QUALQUER tipo de dado já visto até aqui, isso inclui um Array ou até mesmo um outro objeto. Veja o exemplo:
*/

var ex4 = {nomes:["Erick", "Pedro", "Igor"], notas: [9,7,8]}

// Agora, é só seguir o mesmo racíocinio usando o index do seu array

console.log(ex4.nomes[1])
console.log(ex4["nomes"][2])

// Do mesmo jeito que eu posso chamar o Array completo

console.log(ex4.nomes)

// Agora imagine que você precise que o usuário interaja com o código para você ter algum outro dado dentro do seu Objeto, como você faria?

var ex5 = {}

console.log(ex5)

// Até aqui, esse é um Objeto vazio, mas observe agora.

ex5.nome = "José"
ex5["idade"] = 23

console.log(ex5.nome)
console.log(ex5.idade)

// Agora o nosso Objeto possui as PROPRIEDADES "nome" e "idade"


// Eu também posso atribuir um valor a uma variável e usar desse metódo de introdução e chamar a própria variável

var exemplo = {}

// Objeto vazio!

var NovaPropriedade = "nacionalidade"

exemplo[NovaPropriedade] = "brasileiro"

console.log(exemplo.nacionalidade)

// Dessa forma, caso eu precise mudar o valor da "NovaPropriedade" basta eu alterar o valor na própria variável sem precisar alterar meu código.

NovaPropriedade = "sexo"
exemplo[NovaPropriedade] = "Masculino"
console.log(exemplo.sexo)