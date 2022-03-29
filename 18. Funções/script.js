/*
    Function
    
Uma função é um escopo pre-definido para realizar determinada ação. Assim como o 'if', ela também pode retornar algo. Uma function para ser mostrada, precisa ser invocada no seu código.
Vejo o exemplo a seguir da estrutura base de uma function.
*/


function media(){

    var nota1= 8
    var nota2= 6
    var media = (nota1+nota2)/2

    console.log(`Sua média é ${media}`)

}

// Até aqui vemos que a função está totalmente pronta e nela há o 'console.log', mas no console não aparece nada pois a function ainda não foi INVOCADA. Então vamos invoca-la!

media()

// Uma function pode receber argumentos (parametros), que são justamento os valores que ficariam entre os (). media(parametro1, parametro2), por exemplo.

function media2(arg1, arg2){

    var a = arg1
    var b = arg2
    var c = (arg1 + arg2)/2

    console.log(`Sua segunda média é ${c}`)
}

media2()

// Opa, por que o resultado deu um 'NaN' e não o resultado correto? Porque não passamos os valores dos argumentos. Para isso, quando for invocar a function, basta passar dentro do ().

media2(6,7)

// Agora sim. Desta forma, vemos que um function fica bem mais "livre" quando usamos argumentos não definidos dentro de nossa function.


// Como já dito acima, uma function ela pode retornar algo, mas como fazemos isso?

function retorna(a1, b2){
    
    var a = a1
    var b = b2
    var c = (a+b)/2

    //Agora, ao inves de fazer o 'console.log', eu faço o return

    return c
}

// Com o return criado, agora colocaremos seu valor dentro de uma variável

var ex1 = retorna(5,6)

console.log(ex1)

// Agora, praticarei um exemplo mais complexo envolvendo coisas que já estudamos até aqui.


function resultado(n1, n2){
    var prinota = n1
    var segnota = n2

    var resfinal = (prinota + segnota) / 2

    var conceito = ''
    
      
    if( resfinal >= 7 ){

        console.log(`Sua média é ${resfinal}`)

        conceito = '"ótimo"'
    }else{
        console.log(`Sua média é ${resfinal}`)

        conceito = '"ruim "'
    }

    switch(conceito){
        case '"ótimo"':
            console.log(`Você passou com o conceito ${conceito}, parabéns!`)
        break

        case '"ruim "':
            console.log(`Você ficou com o conceito ${conceito}, estude mais!`)
    }
}

resultado(6,7)
