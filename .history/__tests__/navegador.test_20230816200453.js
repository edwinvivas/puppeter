const puppeteer = require("puppeteer")

describe("Mi primer test en puppeteer", () => {
	it("Debe abrir y cerrar el navegador", async () => {
		const browser = await puppeteer.launch({
			headless: false, // si esta en false vemos lo que pasa en el nabvegador
			// slowMo: 0, //camara lenta   > 0 eje 2000 estro se hace porque algunos formularios detectan quie se esta llenando muy rapido, por un robot y lo bloquea
			// devtools: true,
			// defaultViewport: {
			// 	width: 2100,
			// 	height: 1080,
			// },
			// args: ["--window-size=1920,1080"],
			// defaultViewport: null,
		})
		const page = await browser.newPage()
		await page.goto("https://espanol.yahoo.com/")
		await page.waitForSelector("img")

		// await page.reload() //RECARGAR LA PAGINA
		// await page.waitForSelector("img") // espera encontyrar in selector img
		//Navegar a otro sitio
		await page.goto("https://platzi.com/")
		await page.waitForSelector(
			"#Header-v2 > nav > div.Logo > div > a > div > figure:nth-child(1) > img"
		)
		//navegar hacia atras
		await page.goBack()
		await page.goForward()
		// await page.waitForSelector("img")

		//abrir otra pagina
		const page2 = await browser.newPage()
		await page2.goto("https://google.com/")

		await browser.close() // cerrar el navegador
	}, 350000)
})
