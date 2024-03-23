//configurando projeto
const express = require('express')
const app = express()
const port = 3000
// midLewares
app.use(express.json())
// lógica -> contrato
app.get('hello', (req, res) => {
res.send("Hello World")
})

// 1. Faça uma api para criar calcular o estoque médio de uma peça, sendo que ESTOQUE MÈDIO + (QUANTIDADE MÍNIMA + QUANTIDADE MAXIMA) /2.
app.post('/exercicio1', (req, res) => {
    const corpo = req.body
    console.log(corpo)

    const estoqueMedio = (corpo.quantidadeMinima + corpo.quantidadeMaxima) / 2

    const resposta = {
        peca: req.body.peca,
        estoqueMedio: estoqueMedio
    }

    res.json(resposta)
})
// start da aplicação na porta definida
app.listen(port, () => {
    console.log("Aplicação iniciada em http://localhost:3000")
})