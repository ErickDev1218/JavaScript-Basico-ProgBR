/*
    For

O laço FOR é um laço de repetição. A sua estrutura depende de varios fatores. Veja o exemplo a seguir:

for(inicialização; teste lógico; incremento){
    console.log(o que deverá aconter caso passe no teste lógico)
}.

Vejamos um exemplo prático a seguir.
*/


var exemplo1 = 5

for(var i = 1; i < exemplo1; i++){
    console.log(`Você está no passo ${i}`)
}
console.log("AQUI ACABOU O EXEMPLO DE FOR")
/*
    While

O laço WHILE(enquanto) também é um laço de repetição, mas sua estrutura trabalha de uma forma diferente. No laço while e for, temos que ter muito cuidado com a repetição infinita, principalmente quando usamos o WHILE.

Segue exemplo do laço while.

while(teste lógico){
    console.log(O que deve acontecer)
    INCREMENTO
}


Agora um exemplo prático:
*/

while(exemplo1 <= 10){
    console.log(`Você está no passo ${exemplo1}`)
    exemplo1++
}

console.log("Aqui acabou o exemplo de WHILE")