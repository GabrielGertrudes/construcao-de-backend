/* Forma padrao como o nome pega informacao do terminal, 
sem biblioteca, utilizando o modulo core readline

const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.questuib('Qual o seu nome?') , nome => {

    console.log("Olá " + nome + "! tudo bem com voce?")

    readline.close();
}

*/

const prompt = require('prompt-sync')();

const nome = prompt('Qual o seu nome?')

console.log(nome)