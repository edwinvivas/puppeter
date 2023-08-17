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

		await page.reload()
		await browser.close()
	}, 50000)
})
