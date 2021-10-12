import { createWrapper, mount, Wrapper } from "@vue/test-utils"
import Title from "@/components/atoms/Title.vue"

/**
 * group wip
 */
describe("Title", () => {

    const comp = mount(Title)

    beforeAll(() => {
        //wrapper = createWrapper()
        //comp = mount(Title)
    })

    it("Componente desde beforeAll", () => {

        expect(comp.attributes()).toEqual({ class: "page-title" })
        expect(comp.classes()).toEqual(["page-title"])

        expect(comp.html()).not.toMatch(/<span>Jarjareando<\/span>/)
    })

    it("Componente desde test detecta el texto del título", () => {

        const com = mount(Title, { propsData: { label: "Jarjareando" } })

        expect(com.findAll('span').at(0).text()).toBe("Jarjareando")
        expect(com.html()).toMatch(/<span>Jarjareando<\/span>/)
        
        expect(com.vm, 'El atributo vm es undefined').toBeUndefined()
    })

    it("Componente.vm", () => {

        expect(comp.vm).toBeUndefined()

        //const com = mount(Title, { propsData: { label: "Jarjareando" } })
        //Title.setData({ label: 'Labeleando' })
        //console.log(comp.vm.label)
        //console.log(comp.getComponent(Title).selector.render())
        //expect(comp.html()).toMatch(/<span>Jarjareando<\/span>/)
    })
})