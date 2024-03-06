//Imprimindo informações no terminal
console.log("TESTE");

// Variaveis
// var, const, let
// var (comando antigo)
var testandoVar = "testandoVar"
console.log(testandoVar);

// Const -> Crirar uma constante (variavel que nao sofre alteração)
const PI = 3.14

// pi = 9999
console.log(PI)

// let -> criar uma variável que pode sofrer alterações
let nomeCompleto
console.log(nomeCompleto)
nomeCompleto = "Gabriel"
console.log(nomeCompleto)
nomeCompleto = "Gabriel Gertrudes"
console.log(nomeCompleto)

/* Tipos de dados
String
    -> 'ASDUSAHDA' "ASDHASUDAH" `ÁSDASDA ${COMANDO EM JAVASCRIPT}`
Number
    -> 1 1.2 -12
Boolean
    -> true ou false
Array
    -> (Matruz) lista de informações
    -> [1,2,3,4]
Object
    -> {
            "chave": "valor",
            chave: 1
    }
null 
    -> ausência de valor
undefined 
    -> indefinido 
Nan
    -> não é um numero ex: 10/"olá" 
    
    Tratamento de Dados

    */

   // String
let textoCompleto = "Olá tudo bem com você"

console.log(textoCompleto.toUpperCase())
console.log(textoCompleto.toLowerCase())
console.log(textoCompleto.replace("tudo", "1234"))
// não existe replaceAll no node, tenho que utilizar replace com regex

let numeroEmString = String(1.56)
console.log(numeroEmString)
console.log(typeof numeroEmString)

//Number
let StringEmNumero = Number("1.15")
console.log(StringEmNumero)
console.log(typeof StringEmNumero)

console.log(Number.parseInt("1.58"))
let testandoParseFloat = Number.parseFloat(20)
console.log(testandoParseFloat.toFixed(4))

// Array
let ListaDeCarros = ["Gol", "Uno", "corola", "civic"]
console.log(ListaDeCarros)

ListaDeCarros.pop()
console.log(ListaDeCarros)

// Object
let pessoa = {
    nome: "Gabriel Gertrudes",
    idade: 20,
    curso: "ADS",
    matricula: "2311422232",
    instituicao: "IESB",
    endereco: {
        cep: "72000000",
        cidade: "Cei",
        numero: 20
    }
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.endereco)

pessoa.nome = "Gabriel Gertrudes"
console.log(pessoa.nome.toUpperCase())