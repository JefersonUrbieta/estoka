<template>
    <div>
        <az-back-button :route="{name: 'unidadeMedidarBusca'}" text="Voltar para listagem"></az-back-button>
        <az-container>
            <unidade-medida-dados :editavel="editando || !unidadeMedidaLocal.id" v-model="unidadeMedidaLocal"></unidade-medida-dados>
            <formulario-padrao-acoes :editavel="editando || !unidadeMedidaLocal.id" @cancelar="cancelar"
                                     @salvar="salvar"></formulario-padrao-acoes>

        </az-container>
    </div>
</template>

<script>
    import _ from 'lodash'
    import {actionTypes} from '@/commons/constants'
    import UnidadeMedidaDados from './UnidadeMedidaDados'
    import FormularioPadraoAcoes from '@/commons/components/FormularioPadraoAcoes'

    export default {
        name: 'UnidadeMedidaDetalhe',
        components: {FormularioPadraoAcoes, UnidadeMedidaDados},
        data() {
            return {
                unidadeMedidaId: undefined,
                editando: false,
                unidadeMedida: {
                    papel: 'Operador',
                    situacao: 'Ativo'
                },
                unidadeMedidaLocal: {},
            }
        },
        async mounted() {
            this.setEditando(this.$route.query.edicao)
            this.setUsuarioId(this.$route.params.id)
            await this.buscarRegistro()
            this.setUsuarioLocal()
        },
        methods: {
            async buscarRegistro() {
                this.setMensagemLoading('Carregando unidade medida...')
                if (this.unidadeMedidaId) {
                    this.unidadeMedida = await this.$store.dispatch(actionTypes.BUSCAR_UNIDADE_MEDIDA, this.unidadeMedidaId)
                }
            },
            setUsuarioId(unidadeMedidaId) {
                this.unidadeMedidaId = unidadeMedidaId
            },
            setUsuarioLocal() {
                this.unidadeMedidaLocal = _.cloneDeep(this.unidadeMedida)
            },
            setEditando(editando) {
                this.editando = typeof editando !== 'undefined' && (editando.toString() === 'true')
            },
            async salvar() {
                const validado = await this.$validator._base.validateAll()
                if (!validado) {
                    return
                }
                this.setMensagemLoading('Salvando unidade medida...')
                this.unidadeMedida = await this.$store.dispatch(actionTypes.SALVAR_UNIDADE_MEDIDA, this.unidadeMedidaLocal)
                this.mostrarNotificacaoSucessoDefault()
                this.redirecionarParaListagem()
            },
            cancelar() {
                this.unidadeMedidaLocal = _.cloneDeep(this.unidadeMedida)
            },
            redirecionarParaListagem() {
                this.$router.push({name: 'unidadeMedidaBusca'})
            },
        }
    }
</script>
