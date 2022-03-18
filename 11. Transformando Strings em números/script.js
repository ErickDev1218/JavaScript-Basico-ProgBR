//Vejamos o exemplo a seguir.

var ex1 = "3"
var ex2 = "6"

console.log(ex1 + ex2)

//Como já vimos antes, os valores dipostos entre aspas, mesmo sendo números, ainda são considerados strings, por isso o resultado imprimido é '36' (pois concatenou) e não '9'. Mas como resolvo isso?

//Para transformação de qualquer outro tipo para números, usamos o Number(), parseInt() ou parseFloat(), para número de qualquer tipo, para números interios e para números reais (3,5 por exemplo) respectivamente. Portanto, resolveriamos o problema assim:

console.log(parseInt(ex1) + parseInt(ex2))
//Agora sim o valor imprimido é 9!