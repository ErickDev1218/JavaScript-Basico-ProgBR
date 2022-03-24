// Agora que ja entendemos o condicinal de 'if e else', vamos partir para o laço condicional switch. Vejamos o caso a seguir:


var nota1 = 0
var nota2 = 0

var conceito = "" //Aqui eu declarei uma váriavel vazia!

var media = (nota1 + nota2) / 2

if(media >= 9){
    conceito = "Ótimo" //Aqui eu atribui um valor a variavel dentro do if

}else if(media >= 7){
    conceito = "Regular"

}else{
    conceito = "Ruim"

}


console.log(media)
console.log(conceito)

// Mas e se eu quiser falar algo mais além do conceito? Neste exemplo, usaremos o condicional 'Switch'. Vejamos sua estrutura.

/*
switch (variável) {

    case "valor da variavel":
        console.log("O que você quiser que seja impresso")
    break -> MUITO IMPORTANTE LEMBRAR DE USAR O 'BREAK'

    Aqui eu posso inserir quantos 'case' eu quiser, mas por fim, sempre devo inserir o 'default', que é o padrao.

    default:
        console.log("O que você quiser que seja impresso")
    break
}

Agora vamos inseri-lo nesse exemplo que criamos. */

switch (conceito) {

    case "Ótimo":
        console.log("Você foi muito bem, parabens!")
    break

    case "Regular":
        console.log("Você poderia ter sido melhor!")
    break

    case "Ruim":
        console.log("Você precisa se dedicar mais!!")
    break

    default:
        console.log("Aconteceu algum erro com sua nota!")
    break

}