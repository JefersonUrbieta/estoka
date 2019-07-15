import {mount} from '@vue/test-utils'
import LoadingTestComponent from './test/LoadingTestComponent'
import {mutationTypes} from '@/commons/constants'
import appTestBuilder from '@/AppTestBuilder'

describe('Mixin Loading', () => {

    let wrapper, localVue, store, spy

    beforeEach(() => {
        spy = jest.fn()
        store = {}
        localVue = appTestBuilder.build(store)
    })

    describe('methods', () => {

        it('Deve chamar mutation DISABLE_GLOBAL_LOADING', () => {
            wrapper = mount(LoadingTestComponent, {
                localVue,
                store: store,
                methods: {[mutationTypes.LOKI.DISABLE_GLOBAL_LOADING]: spy}
            })
            wrapper.find('.desabilitarLoadingGlobal').trigger('click')

            expect(spy.mock.calls.length).toBe(1)
        })

        it('Deve chamar mutation ENABLE_GLOBAL_LOADING', () => {
            wrapper = mount(LoadingTestComponent, {
                localVue,
                store: store,
                methods: {[mutationTypes.LOKI.ENABLE_GLOBAL_LOADING]: spy}
            })
            wrapper.find('.habilitarLoadingGlobal').trigger('click')

            expect(spy.mock.calls.length).toBe(1)
        })

        it('Deve chamar mutation SET_LOADING_MESSAGE', () => {
            wrapper = mount(LoadingTestComponent, {
                localVue,
                store: store,
                methods: {[mutationTypes.LOKI.SET_LOADING_MESSAGE]: spy}
            })
            wrapper.find('.setMensagemLoading').trigger('click')

            expect(spy.mock.calls.length).toBe(1)
            expect(spy.mock.calls[0][0]).toBe('mensagem')
        })
    })
})
