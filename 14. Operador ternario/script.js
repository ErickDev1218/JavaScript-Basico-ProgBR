//O operador ternario funciona de forma bem parecida com o condicional de 'if - else', a diferença é que com ele eu posso trabalhar dentro de valores de variáveis. Segue exemplo.

// var idade = 17

// idade >= 18 ? console.log('Sim') : console.log('Não')


// Algo um pouco mais complexo:

var idade = 17

var verdadeiro = "É de maior"
var falso = "É de menor"

var pode = idade >= 18 ? verdadeiro : falso

console.log(pode)