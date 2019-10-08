const calculaDesconto = (valor, desconto) => valor * desconto

const validaCompra = (compra) => {

    const pagamentoPermitidos = ['dinheiro', 'credito', 'debito']

    if (!pagamentoPermitidos.includes(compra.formaPagamento)) { return false }

    if (!compra.valor || isNaN(compra.valor)) { return false }

    return true
}

const calculaTotalComDesconto = (valor, formaPagamento) => {

    const desconto = geraDesconto(formaPagamento)

    const total = valor - calculaDesconto(valor, desconto)

    return { total, desconto }
}

const geraDesconto = (formaPagamento) => {
    switch (formaPagamento) {
        case 'dinheiro':
            return .3
        case 'debito':
            return .2
        case 'credito':
            return .1
        default:
            return 0
    }
}

module.exports = { calculaDesconto, validaCompra, calculaTotalComDesconto, geraDesconto }