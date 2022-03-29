/*
Na aula passada vimos algumas maneiras de criar uma function no JS. Vejamos:
*/

function saudacao(){
    return "Olá mundo!"

}
var resultado = saudacao()
console.log(resultado)


// Até aqui tudo bem, essa foi uma função que não necessitou de argumentos, mas o que aconteceria se eu passasse uma function para uma variável sem os ()?

var res1 = saudacao

console.log(res1)

// Conseguimos ver claramente que agora, a variável se tornou a minha função! Portanto, eu posso passar os argumentos dentro da propria variável. Veja a seguir um exemplo!


function media(n1,n2){
    return (n1+n2)/2
}

var res2 = media

console.log(res2(5,6))

// Então com isso chegamos a conclusão que o JS permite que eu coloque functions dentro de variáveis! Com esse pensamento, surgiu a ideia da function anonima. Mas como funciona isso?

var anonima = function (arg1, arg2) {
        return (arg1 + arg2)/2
}

console.log(anonima(6,7))

// Esse é um exemplo de função anonima porque ela não recebe nenhum nome para invoca-la. Para invoca-la, eu devo chamar a variável e não a função!

// Com isso também surgiu a Arrow Function, que permite que não seja necessário o uso da palavra reservada function, mas seja necessario o uso de '=>'. Veja um exemplo:

var anonima2 = (ex1,ex2) => {
    return (ex1 + ex2) / 2
}

console.log(anonima2(8,7))

// Exploraremos o conceito de Arrow Function futuramente de forma mais aprofundada, mas é importante saber que ela existe.
