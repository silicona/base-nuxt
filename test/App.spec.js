import { get, setupTest } from "@nuxt/test-utils"
import 'core-js'  // Importa la lib setIntermediate

describe("Appeando", () => {

  setupTest({
    server: true,
    /*browser: false,
    browserOptions: {
      type: 'firefox',
      launch: {}
    }*/
  })

  it('Renderiza Index', async () => {

    const { body } = await get('/')

    //console.log(res)
    expect(body).toContain("index")
  })
})