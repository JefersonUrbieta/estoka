<template>
    <az-container>
        <v-data-table :headers="colunas" :hide-actions="itens.length < paginacao.rowsPerPage" :items="itens" :pagination.sync="paginacao"
                      :search="search">
            <template slot="items" slot-scope="props">
                <td>{{ props.item.nome }}</td>
                <td>{{ props.item.descricao }}</td>
                <td class="table-actions">
                    <v-tooltip class="no-mobile" top>
                        <a @click="$emit('visualizar',props.item.id)" slot="activator">
                            <v-icon>search</v-icon>
                        </a>
                        Visualizar
                    </v-tooltip>
                    <v-tooltip class="no-mobile" top>
                        <a @click="$emit('editar',props.item.id)" slot="activator">
                            <v-icon>edit</v-icon>
                        </a>
                        Editar
                    </v-tooltip>
                    <v-tooltip class="no-mobile" top>
                        <a @click="$emit('remover',props.item.id)" slot="activator">
                            <v-icon>delete</v-icon>
                        </a>
                        Remover
                    </v-tooltip>
                </td>
            </template>
        </v-data-table>
    </az-container>
</template>

<script>
    export default {
        name: 'CategoriaBuscaTabela',
        props: ['itens', 'search'],
        data() {
            return {
                colunas: [
                    {
                        text: 'Nome',
                        align: 'left',
                        value: 'nome',
                        class: 'primary--text'
                    },
                    {
                        text: 'Descricao',
                        align: 'left',
                        value: 'descricao',
                        class: 'primary--text'
                    },
                    {
                        text: 'Ações',
                        align: 'center',
                        sortable: false,
                        class: 'primary--text'
                    }
                ],
                paginacao: {
                    rowsPerPage: 25
                }
            }
        }
    }
</script>

<style lang="stylus">
    @media (max-width: 720px)
        .tabela-usuarios
            td:nth-of-type(1):before
                content: "Nome:"

            td:nth-of-type(2):before
                content: "E-mail:"

            td:nth-of-type(3):before
                content: "CPF:"

            td:nth-of-type(4):before
                content: "Telefone:"

            td:nth-of-type(5):before
                content: "Situação:"

            .table-actions
                display none !important

</style>
