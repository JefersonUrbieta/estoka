import {mount} from '@vue/test-utils'
import NotificacaoTestComponent from './test/NotificacaoTestComponent'
import {mutationTypes} from '@/commons/constants'
import appTestBuilder from '@/AppTestBuilder'

describe('Mixin Notificacao', () => {

    let wrapper, localVue, store, spy

    beforeEach(() => {
        spy = jest.fn()
        store = {}
        localVue = appTestBuilder.build(store)
    })

    describe('methods', () => {

        it('Deve chamar mutation MOSTRAR_MENSAGEM_ERRO', () => {
            wrapper = mount(NotificacaoTestComponent, {
                localVue,
                store: store,
                methods: {[mutationTypes.MOSTRAR_MENSAGEM_ERRO]: spy}
            })
            wrapper.find('.mostrarNotificacaoErro').trigger('click')

            expect(spy.mock.calls.length).toBe(1)
            expect(spy.mock.calls[0][0]).toBe('mensagem')
        })

        it('Deve chamar mutation MOSTRAR_MENSAGEM_ERRO_DEFAULT', () => {
            wrapper = mount(NotificacaoTestComponent, {
                localVue,
                store: store,
                methods: {[mutationTypes.MOSTRAR_MENSAGEM_ERRO_DEFAULT]: spy}
            })
            wrapper.find('.mostrarNotificacaoErroDefault').trigger('click')

            expect(spy.mock.calls.length).toBe(1)
        })

        it('Deve chamar mutation MOSTRAR_MENSAGEM_SUCESSO_DEFAULT', () => {
            wrapper = mount(NotificacaoTestComponent, {
                localVue,
                store: store,
                methods: {[mutationTypes.MOSTRAR_MENSAGEM_SUCESSO_DEFAULT]: spy}
            })
            wrapper.find('.mostrarNotificacaoSucessoDefault').trigger('click')

            expect(spy.mock.calls.length).toBe(1)
        })
    })
})
