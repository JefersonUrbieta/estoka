import Vue from 'vue'
import {mapMutations} from 'vuex'
import {mutationTypes} from '@/commons/constants'

Vue.mixin({
    methods: {
        desabilitarLoadingGlobal() {
            this.disableGlobalLoading()
        },
        habilitarLoadingGlobal() {
            this.enableGlobalLoading()
        },
        setMensagemLoading(mensagem) {
            this.setLoadingMessage(mensagem)
        },
        ...mapMutations([
            mutationTypes.LOKI.DISABLE_GLOBAL_LOADING,
            mutationTypes.LOKI.ENABLE_GLOBAL_LOADING,
            mutationTypes.LOKI.SET_LOADING_MESSAGE])
    }
})
