const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.questuib('Qual o seu nome?') , nome => {

    console.log("Olá " + nome + "! tudo bem com voce?")

    readline.close();
}