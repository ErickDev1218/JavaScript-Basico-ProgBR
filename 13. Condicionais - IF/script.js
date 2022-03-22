/*
O condicional if normalmente é utilizado para tratar de formas booleanas, ou seja, caso uma sentença seja verdadeira ou caso a sentença seja falsa.

Mas qual a estrutura de um if?

if (aqui vai o teste lógico){
    aqui vai o que deve acontecer caso seja true
}else{
    aqui vai o que deve acontecer caso seja false
}


Podemos também utilizar de um 'else if'.

if (aqui vai o teste lógico){
    aqui vai o que deve acontecer caso seja true
}
else if (teste lógico){
    aqui vai o que deve acontecer caso seja true
}
else{
    aqui vai o que deve acontecer caso seja false
}

Vamos a alguns exemplos práticos.
*/



/* Aqui criamos um exemplo a respeito de bebidas para menores

var idade = Number(prompt("Qual sua idade?"))

if (idade >= 18){
    alert("Você pode comprar e consumir bebidas alcoolicas.")
}else{
    alert("Você não possui maioridade. Volte futuramente.")
}
*/

/* Esse é um exemplo que mistura o conceito de if e operadores lógicos e comparativos*/

var idade = Number(prompt("Qual sua idade?"))

if(idade >= 18 && idade < 65){
    alert("Você deve votar de forma obrigatória!")
} else if (idade >= 16 && idade < 18){
    alert("Você pode votar de forma optativa!")
}else{
    alert("Você NÃO é obrigado a votar!")
}
