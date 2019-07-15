import Vue from 'vue'
import {notificacoesDefault, mutationTypes} from '../constants'
import FileManagerUtils from '../utils/FileManagerUtils'

export default {

    [mutationTypes.MOSTRAR_MENSAGEM_ERRO](state, mensagem) {
        state.loki.alert = {message: mensagem, type: 'error'}
    },

    [mutationTypes.MOSTRAR_MENSAGEM_ERRO_DEFAULT](state) {
        state.loki.alert = {message: notificacoesDefault.ERRO_DEFAULT, type: 'error'}
    },

    [mutationTypes.MOSTRAR_MENSAGEM_ERRO_PERDA_SESSAO](state) {
        state.loki.alert = {message: notificacoesDefault.ERRO_PERDA_SESSAO, type: 'error'}
    },

    [mutationTypes.MOSTRAR_MENSAGEM_SUCESSO_DEFAULT](state) {
        state.loki.alert = {message: notificacoesDefault.SUCESSO_DEFAULT, type: 'success'}
    },

    [mutationTypes.SET_MENU_AVATAR](state) {
        const actions = {
            1: {title: 'Perfil', icon: 'star', path: '/perfil'}
        }
        Vue.set(state.loki, 'avatarActions', actions)
    },

    [mutationTypes.SET_PRODUTO](state, {data, packageJson}) {
        state.loki.product.id = data.id
        state.loki.product.name = data.nome
        state.loki.product.mainLogo = FileManagerUtils.createUrl(data.atributosExtendidos.logoMenu)
        state.loki.product.symbolLogo = FileManagerUtils.createUrl(data.atributosExtendidos.logoMenuRetraido)
        state.loki.product.version = packageJson.version
        state.loki.product.copywrite = 'Todos os direitos reservados'
        state.loki.product.logoutUrl = '/hal/logout'
    },

    [mutationTypes.SET_USUARIO_LOGADO](state, usuario) {
        const user = {
            id: usuario.userId,
            name: usuario.userName,
            fullName: usuario.name,
            photo: FileManagerUtils.createThumbnailUrl(usuario.imageUrl),
            type: usuario.tipoUsuario,
            domainType: usuario.domainType,
            domainId: usuario.domainId,
            authorities: usuario.authorities
        }
        Vue.set(state.loki, 'user', user)
    }

}
