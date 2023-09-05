const puppeteer = require("puppeteer")
//instalar la esxtension jest para ver el log y correr las pruebas mas facil en visual
describe("Interactuando con elementos", () => {
	it("Debe abrir y cerrar el navegador", async () => {
		const browser = await puppeteer.launch({
			headless: false, // si esta en false vemos lo que pasa en el nabvegador
			defaultViewport: null,
		})

		const page = await browser.newPage()
		await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
		// Evento para cerrar un dialogo generico aceptar (Los dialogos no se pueden identificar, no se pueden inspeccionar)
		page.on("dialog", async (dialog) => {
			await new Promise((r) => setTimeout(r, 3000))
			await dialog.accept()
		})

		//Click derecho
		// await page.click("#authentication > span", { button: "right", delay: 500 })
		// await new Promise((r) => setTimeout(r, 3000))

		//Doble click
		await page.click("#authentication > button", { clickCount: 2, delay: 500 })
		await new Promise((r) => setTimeout(r, 3000))
		// Navegando a la pagina que contiene un formulario
		await page.goto("https://devexpress.github.io/testcafe/example/")
		//llenando un input con el selector que en este caso es un id
		await page.type("#developer-name", "Edwin", { delay: 100 })
		//haciendo click en dos checkbox
		await page.click("#remote-testing")
		await page.click("#tried-test-cafe")
		//ingresando un comentario en un campo que se habilita cuando se selecciona cun checkbox
		await page.type("#comments", "Esto es un comentario de Edwin")
		//Haciendo click en un boton
		await page.click("#submit-button")
		// esperar 3 segundos
		await new Promise((r) => setTimeout(r, 3000))
		await browser.close() // cerrar el navegador
	}, 350000)
})
