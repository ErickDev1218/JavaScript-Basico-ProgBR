// Essa é uma aula de exercício, onde o desafio proposto é criar uma lista (usando tudo que já vimos até aqui) parecido com o de uma escola, onde mostrará o nome do aluno, sua nota 1, sua nota 2, sua média final e sua situação final.

// Nome - nota1 - nota2 - média - aprovado/reprovado.


var nomes = ["Erick", "Kartylla", "Pedro"]

var nota1 = [7.0, 6.5, 9.0]

var nota2 = [6.0, 8.0, 6.5]


function media(n1,n2){
    return (n1+n2)/2
}


var conceito = (media) => {
    var situacao = ""
    
    if(media >= 7){
        situacao = "Parabéns, você foi aprovado!"
        return situacao

    }else{
        situacao = "Estude mais, você foi reprovado!"
        return situacao
    }
}


for(var i in nomes){

    var notaA = nota1[i]
    var notaB = nota2[i]

    var res = media(notaA,notaB)


    console.log(`${nomes[i]} - ${notaA} - ${notaB} - ${res} - ${conceito(res)} `)
}