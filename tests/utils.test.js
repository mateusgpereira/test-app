const { calculaDesconto, validaCompra } = require('../src/utils/utils')

test('Deve calcular o desconto de 30% para 100', () => {
    const desconto = calculaDesconto(100, .3)
    expect(desconto).toBe(30)
})

test('Não deve aceitar uma compra sem valor', () => {
    const compra = { formaPagamento: 'dinheiro' }
    const resposta = validaCompra(compra)

    expect(resposta).toBe(false)
})