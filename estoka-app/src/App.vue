<template>
    <az-template-default>
        <router-view/>
    </az-template-default>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { mutationTypes } from './commons/constants'

export default {
    computed: {
        ...mapState(['fileManagerUri'])
    },
    created () {
        // this.setApiArquivos(this.fileManagerUri)
        this.carregarTimezone()
    },
    methods: {
        carregarTimezone () {
            this.setTimezone('America/Sao_Paulo')
        },
        ...mapMutations([mutationTypes.LOKI.SET_TIMEZONE])
    }
}
</script>

<style lang="stylus">
    .v-toolbar__content
        .btn-close
            margin-right 10px !important

    .az-container
        margin: 20px 20px 60px 20px !important

    .az-form-content
        .container
            background-color white !important

    .btn-advanced-search
        color white !important

    .icon-search
        height 32px !important
        width 32px !important
</style>
