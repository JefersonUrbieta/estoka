import menuUtils from './MenuUtils'

describe('MenuUtils', () => {

    it('Deve retornar menus sem o menu passado por parâmetro', () => {
        let menuActions = [{name: '1'}, {name: '2'}]
        expect(menuUtils.removeMenu(menuActions, '2')).toEqual([{name: '1'}])
    })

})
