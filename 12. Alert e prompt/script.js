/*
    alert("Olá mundo")

Isso acima é um alert, e seria a maneira mais simples de interagir com o usuário. Mas por ser muito simples, não abre porta para outras interações. Por isso, surgiu o prompt.*/

/*
    prompt("Olá mundo")
 
Com o prompt é possível que o usuário coloque valores numa caixa de text. ATENÇÃO POIS ESSE VALOR COLOCADO PELO USUÁRIO É E SEMPRE SERÁ UMA STRING (relembrar da aula de transformação de dados.).

Mas como eu uso esse dado colocado pelo o usuário? Simples! Coloque-a dentro de uma variável!*/

// var nome = prompt("Qual seu nome?")

// alert(`Muito prazer, ${nome}`)


/* Um exemplo um pouco mais completo

var nome = prompt("Qual seu nome?")
var idade = prompt("Qual sua idade?")
var sexo = prompt("Qual seu sexo?")

alert(`Muito prazer, ${nome}, vi aqui que você tem ${idade} anos e é do sexo ${sexo}.`) */


// Trabalhando com números

var salario = Number(prompt("Qual seu salário atual?"))

alert(`Vi aqui que seu salário é ${salario}, o dobro dele seria ${salario*2}`)

// Aqui caberia usar o parseInt ou parseFloat também!