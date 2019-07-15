<template>
    <div>
        <az-toolbar>
            <az-call-to-action @click="novo" active css-class="no-mobile" slot="actions">
                <v-icon>add_circle</v-icon>
                Novo
            </az-call-to-action>

            <v-text-field
                append-icon="search"
                clearable
                hide-details
                label="Pesquisa"
                single-line
                slot="simpleSearch"
                solo
                v-model="search"
            ></v-text-field>
        </az-toolbar>
        <fornecedor-busca-tabela :itens="itens" :search="search" @editar="eventoEditar" @visualizar="eventoVisualizar"/>
    </div>
</template>

<script>
    import { actionTypes } from '@/commons/constants'
    import FornecedorBuscaTabela from './FornecedorBuscaTabela'

    export default {
        name: 'FornecedorBusca',
        components: {FornecedorBuscaTabela},
        data() {
            return {
                search: '',
                itens: []
            }
        },
        async mounted() {
            await this.buscar()
        },
        methods: {
            async buscar() {
                this.setMensagemLoading('Carregando fornecedores...')
                this.itens = await this.$store.dispatch(actionTypes.BUSCAR_FORNECEDORS)
            },
            eventoEditar( id ) {
                this.$router.push({name: 'fornecedorDetalhe', params: {id}, query: {edicao: true}})
            },
            eventoVisualizar( id ) {
                this.$router.push({name: 'fornecedorDetalhe', params: {id}})
            },
            novo() {
                this.$router.push({name: 'fornecedorNovo'})
            }
        }
    }
</script>
