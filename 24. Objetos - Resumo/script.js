// Um resumo de tudo que foi visto com relação aos Objetos aqui em JS

// Sua criação mais básica

var ex1 = {nome:"Erick",sobrenome:"Freitas"}

console.log(ex1)

// Sua criação usando uma function

function obj(n,s){
    return {nome: n, sobrenome:s}
}

var ex2 = obj("Erick","Freitas")

console.log(ex2)

// Sua criação a partir de uma instancia

function teste(n,s){
    this.nome = n
    this.sobrenome = s
}

var ex3 = new teste("Erick","Freitas")
console.log(ex3)