const path = require('path')
const express = require('express')
const { validaCompra, calculaTotalComDesconto } = require('./utils/utils')

const publicPath = path.join(__dirname, '../public')

const app = new express()

app.use(express.json())
app.use(express.static(publicPath))

app.post('/compras', async(req, res) => {

    const compra = req.body

    if (!validaCompra(compra)) {
        res.status(400).send({ error: 'compra invalida' })
    }

    const { total, desconto } = await calculaTotalComDesconto(compra.valor, compra.formaPagamento)
    compra.total = total
    compra.desconto = desconto * 100

    res.send(compra)
})

module.exports = app