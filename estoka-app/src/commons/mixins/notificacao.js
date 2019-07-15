import Vue from 'vue'
import {mapMutations} from 'vuex'
import {mutationTypes} from '@/commons/constants'

Vue.mixin({
    methods: {
        mostrarNotificacaoErro(mensagem) {
            this.mostrarMensagemErro(mensagem)
        },
        mostrarNotificacaoErroDefault() {
            this.mostrarMensagemErroDefault()
        },
        mostrarNotificacaoSucessoDefault() {
            this.mostrarMensagemSucessoDefault()
        },
        ...mapMutations([
            mutationTypes.MOSTRAR_MENSAGEM_ERRO,
            mutationTypes.MOSTRAR_MENSAGEM_ERRO_DEFAULT,
            mutationTypes.MOSTRAR_MENSAGEM_SUCESSO_DEFAULT
        ])
    }
})
