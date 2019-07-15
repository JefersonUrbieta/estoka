import {buildMenu} from '@azinformatica/loki'
import Vue from 'vue'
import App from './App.vue'
import router from './commons/router'
import store from './commons/store'
import packageJson from '../package'
import {mutationTypes, produto} from './commons/constants'
import '@babel/polyfill'
import './commons/filters'
import './commons/mixins'
import './plugins'
import './assets/style.styl'

class AppBuilder {

    async build() {
        await this._resolverDependencias()
        this._criarInstanciaVue()
    }

    async _resolverDependencias() {
        await this._iniciarProduto()
        this._atualizarAvatarActions()
    }

    async _iniciarProduto() {
        await store.commit(mutationTypes.SET_PRODUTO, {data: produto, packageJson})
    }

    _atualizarAvatarActions() {
        store.commit(mutationTypes.SET_MENU_AVATAR)
    }

    _criarInstanciaVue() {
        new Vue({
            router,
            store,
            render: h => h(App),
            created() {
                this.$store.commit('SET_MENU_ACTIONS', buildMenu(store, router))
            }
        }).$mount('#app')
    }
}

export default new AppBuilder()
