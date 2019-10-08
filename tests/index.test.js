const puppeteer = require('puppeteer')

test('deve enviar o form com uma compra válida', async() => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=832,624']
    })
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')

    await page.click('input#valor')
    await page.type('input#valor', '300')
    await page.click('input#forma-pagamento')
    await page.type('input#forma-pagamento', 'credito')
    await page.click('button#form-button')
    await page.waitForSelector('#resposta p')
    const respostaCompra = await page.$eval('#resposta p', el => el.textContent)
    expect(respostaCompra).toBe('Total a pagar: R$ 270 Desconto: 10%')
}, 10000)