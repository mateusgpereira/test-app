const app = require('../src/app')
const request = require('supertest')

test('Deve realizar uma compra retornando 200', async() => {
    await request(app).post('/compras').send({
        valor: 150,
        formaPagamento: 'credito'
    }).expect(200)
})

test('Deve fazer uma compra no debito com 20% de desconto', async() => {
    const res = await request(app).post('/compras').send({
        valor: 200,
        formaPagamento: 'debito'
    }).expect(200)

    expect(res.body.desconto).toBe(20)
})