const $form = document.getElementById('form-compra')
const $divResposta = document.getElementById('resposta')

$form.addEventListener('submit', (e) => {
    e.preventDefault()

    let valor = e.target.elements.valor.value
    let formaPagamento = e.target.elements.formaPagamento.value

    fetch('/compras', {
        method: 'POST',
        body: JSON.stringify({ valor: valor, formaPagamento: formaPagamento }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        res.json().then((compra) => {
            $divResposta.className = ''
            if (compra.error) {
                $divResposta.classList.add('alert', 'alert-warning')
                $divResposta.innerHTML = `<p>${compra.error}</p>`
            } else {
                $divResposta.classList.add('alert', 'alert-info')
                $divResposta.innerHTML = `<p>Total a pagar: R$ ${compra.total} Desconto: ${compra.desconto}%</p>`
            }
        })
    }).catch((e) => {
        console.log('Error:', e)
    })

})