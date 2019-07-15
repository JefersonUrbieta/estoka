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
        <categoria-busca-tabela :itens="itens" :search="search" @editar="eventoEditar" @visualizar="eventoVisualizar"/>
    </div>
</template>

<script>
    import { actionTypes } from '@/commons/constants'
    import CategoriaBuscaTabela from './CategoriaBuscaTabela'

    export default {
        name: 'CategoriaBusca',
        components: {CategoriaBuscaTabela},
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
                this.setMensagemLoading('Carregando categorias...')
                this.itens = await this.$store.dispatch(actionTypes.BUSCAR_CATEGORIAS)
            },
            eventoEditar( id ) {
                this.$router.push({name: 'categoriaDetalhe', params: {id}, query: {edicao: true}})
            },
            eventoVisualizar( id ) {
                this.$router.push({name: 'categoriaDetalhe', params: {id}})
            },
            novo() {
                this.$router.push({name: 'categoriaNovo'})
            }
        }
    }
</script>
