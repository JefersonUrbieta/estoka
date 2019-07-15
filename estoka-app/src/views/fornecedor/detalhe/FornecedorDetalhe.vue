<template>
    <div>
        <az-back-button :route="{name: 'fornecedorrBusca'}" text="Voltar para listagem"></az-back-button>
        <az-container>
            <fornecedor-dados :editavel="editando || !fornecedorLocal.id" v-model="fornecedorLocal"></fornecedor-dados>
            <formulario-padrao-acoes :editavel="editando || !fornecedorLocal.id" @cancelar="cancelar"
                                     @salvar="salvar"></formulario-padrao-acoes>

        </az-container>
    </div>
</template>

<script>
    import _ from 'lodash'
    import {actionTypes} from '@/commons/constants'
    import FornecedorDados from './FornecedorDados'
    import FormularioPadraoAcoes from '@/commons/components/FormularioPadraoAcoes'

    export default {
        name: 'FornecedorDetalhe',
        components: {FormularioPadraoAcoes, FornecedorDados},
        data() {
            return {
                fornecedorId: undefined,
                editando: false,
                fornecedor: {
                    papel: 'Operador',
                    situacao: 'Ativo'
                },
                fornecedorLocal: {},
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
                this.setMensagemLoading('Carregando fornecedor...')
                if (this.fornecedorId) {
                    this.fornecedor = await this.$store.dispatch(actionTypes.BUSCAR_FORNECEDOR, this.fornecedorId)
                }
            },
            setUsuarioId(fornecedorId) {
                this.fornecedorId = fornecedorId
            },
            setUsuarioLocal() {
                this.fornecedorLocal = _.cloneDeep(this.fornecedor)
            },
            setEditando(editando) {
                this.editando = typeof editando !== 'undefined' && (editando.toString() === 'true')
            },
            async salvar() {
                const validado = await this.$validator._base.validateAll()
                if (!validado) {
                    return
                }
                this.setMensagemLoading('Salvando fornecedor...')
                this.fornecedor = await this.$store.dispatch(actionTypes.SALVAR_FORNECEDOR, this.fornecedorLocal)
                this.mostrarNotificacaoSucessoDefault()
                this.redirecionarParaListagem()
            },
            cancelar() {
                this.fornecedorLocal = _.cloneDeep(this.fornecedor)
            },
            redirecionarParaListagem() {
                this.$router.push({name: 'fornecedorBusca'})
            },
        }
    }
</script>
