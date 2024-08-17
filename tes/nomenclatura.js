//tipos de variaveis
var a = "chocolate"//não é mais uma boa prática
let b = "laranja"
//const não pode receber um novo valor
const c = 10
const d = "Não deu certo"

a = 111
b = "troquei"

console.log(a)
console.log(c)
console.log(b)

//tipos de dados
//string
const name = "Meu nome"

//number
const num = 1

//boolean
const isApproved = false

//nulo
const lastName = null

//undefined 
let address

//object
const brand = {
    name: "nike",
    size: ["P", "M", "G"]
}

//array 
const languages = [
    "java",
    "javascript"
]

//tipos de console
console.log(a)
console.warn(b) //atenção
console.error(d)
console.table()
//Limpar consoles após a visualização
// console.clear() ctrl + ; para comentar o código