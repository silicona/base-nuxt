import Index from '@/pages/index.vue'
import { createPage, setupTest } from '@nuxt/test-utils'
import 'core-js'  // Incluye setIntermediate
import { mount } from '@vue/test-utils'

/**
 * @group wip
 */
describe("index", () => {

  setupTest({ browser: true })

  it("Viendo como pagina", async () => {

    const page = await createPage('/')
    const html = await page.innerHTML('h1 span')

    expect(html).toBe('Index')
  })

  it("Index como componente VM", () => {

    const com = mount(Index)

    expect(com.vm).toBeTruthy()
    expect(com.vm.$options.name, 'Tiene su nombre').toBe('Index')

    expect(com.vm.$options.computed.getPageName(), 'Computa su nombre').toBe('Index')

    expect(com.vm.$attrs).toEqual({})
    //expect(com.vm.$children).toBe(true)

    /*
    var keys = []
    for( var key in com.vm.$options){
      keys.push(key)
    }
    console.log(keys)
    console.log(com.vm.$options.computed)
    //console.log(com.vm.$children[0])
    */

  })
})