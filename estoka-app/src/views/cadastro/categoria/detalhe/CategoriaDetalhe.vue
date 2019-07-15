<template>
    <div>
        <az-back-button :route="{name: 'categoriarBusca'}" text="Voltar para listagem"></az-back-button>
        <az-container>
            <categoria-dados :editavel="editando || !categoriaLocal.id" v-model="categoriaLocal"></categoria-dados>
            <formulario-padrao-acoes :editavel="editando || !categoriaLocal.id" @cancelar="cancelar"
                                     @salvar="salvar"></formulario-padrao-acoes>

        </az-container>
    </div>
</template>

<script>
import _ from 'lodash'
import { actionTypes } from '@/commons/constants'
import CategoriaDados from './CategoriaDados'
import FormularioPadraoAcoes from '@/commons/components/FormularioPadraoAcoes'

export default {
    name: 'CategoriaDetalhe',
    components: { FormularioPadraoAcoes, CategoriaDados },
    data () {
        return {
            categoriaId: undefined,
            editando: false,
            fornecedor: {
                papel: 'Operador',
                situacao: 'Ativo'
            },
            categoriaLocal: {},
        }
    },
    async mounted () {
        this.setEditando(this.$route.query.edicao)
        this.setUsuarioId(this.$route.params.id)
        await this.buscarRegistro()
        this.setUsuarioLocal()
    },
    methods: {
        async buscarRegistro () {
            this.setMensagemLoading('Carregando fornecedor...')
            if (this.categoriaId) {
                this.fornecedor = await this.$store.dispatch(actionTypes.BUSCAR_CATEGORIA, this.categoriaId)
            }
        },
        setUsuarioId (categoriaId) {
            this.categoriaId = categoriaId
        },
        setUsuarioLocal () {
            this.categoriaLocal = _.cloneDeep(this.fornecedor)
        },
        setEditando (editando) {
            this.editando = typeof editando !== 'undefined' && (editando.toString() === 'true')
        },
        async salvar () {
            const validado = await this.$validator._base.validateAll()
            if (!validado) {
                return
            }
            this.setMensagemLoading('Salvando fornecedor...')
            this.fornecedor = await this.$store.dispatch(actionTypes.SALVAR_CATEGORIA, this.categoriaLocal)
            this.mostrarNotificacaoSucessoDefault()
            this.redirecionarParaListagem()
        },
        cancelar () {
            this.categoriaLocal = _.cloneDeep(this.fornecedor)
        },
        redirecionarParaListagem () {
            this.$router.push({ name: 'categoriaBusca' })
        },
    }
}
</script>
