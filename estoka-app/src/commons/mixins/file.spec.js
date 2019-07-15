import {mount} from '@vue/test-utils'
import FileTestComponent from './test/FileTestComponent'
import appTestBuilder from '@/AppTestBuilder'

describe('Mixin File', () => {

    let wrapper, localVue, store, spyCommit, spyDispatch

    beforeEach(() => {
        spyCommit = jest.fn()
        spyDispatch = jest.fn()
        store = {
            state: {
                loki: {
                    filesApi: 'mockFileApiUrl'
                }
            },
            commit: spyCommit,
            dispatch: spyDispatch
        }
        localVue = appTestBuilder.build(store)
    })

    describe('methods', () => {

        it('Deve criar link para download de acordo com uri e thumbnail passados', () => {
            wrapper = mount(FileTestComponent, {localVue, store: store})
            const resultadoCriarLinkDownload = wrapper.find('.criarLinkDownload').text()
            const resultadoCriarLinkDownloadTemporario = wrapper.find('.criarLinkDownloadTemporario').text()

            expect(resultadoCriarLinkDownload).toBe('mockFileApiUrl?uri=uri&thumbnail=true')
            expect(resultadoCriarLinkDownloadTemporario).toBe('mockFileApiUrl/temporario?uri=uri&thumbnail=false')
        })

        it('Deve chamar commit da store com parâmetro SET_FILES_API', () => {
            wrapper = mount(FileTestComponent, {localVue, store: store})
            wrapper.find('.setApiArquivos').trigger('click')

            expect(spyCommit.mock.calls[0][0]).toBe('SET_FILES_API')
            expect(spyCommit.mock.calls[0][1]).toBe('api')
        })

        it('Deve chamar commit da store com parâmetro SET_UPLOADED_FILES', () => {
            wrapper = mount(FileTestComponent, {localVue, store: store})
            wrapper.find('.resetUploadedFiles').trigger('click')

            expect(spyCommit.mock.calls[0][0]).toBe('SET_UPLOADED_FILES')
            expect(spyCommit.mock.calls[0][1]).toEqual([])
        })

        it('Deve chamar dispatch da store com parâmetro uploadFile', () => {
            wrapper = mount(FileTestComponent, {localVue, store: store})
            wrapper.find('.uploadFile').trigger('click')

            expect(spyDispatch.mock.calls[0][0]).toBe('uploadFile')
            expect(spyDispatch.mock.calls[0][1]).toEqual({payload: 'payload'})
        })
    })
})
