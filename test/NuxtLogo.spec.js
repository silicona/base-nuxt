import { mount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    /*console.log(NuxtLogo)
    console.log(wrapper.attributes())
    console.log(wrapper.element)
    console.log(wrapper.getComponent(NuxtLogo))*/
    expect(wrapper.vm).toBeTruthy()
  })

})
