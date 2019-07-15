import Vue from 'vue'

Vue.mixin({
    methods: {
        criarLinkDownload(uri, thumbnail) {
            return `${this.$store.state.loki.filesApi}?uri=${uri}&thumbnail=${thumbnail === true}`
        },
        criarLinkDownloadTemporario(uri, thumbnail) {
            return `${this.$store.state.loki.filesApi}/temporario?uri=${uri}&thumbnail=${thumbnail === true}`
        },
        setApiArquivos(api) {
            this.$store.commit('SET_FILES_API', api)
        },
        resetUploadedFiles() {
            this.$store.commit('SET_UPLOADED_FILES', [])
        },
        async uploadFile(payload) {
            return await this.$store.dispatch('uploadFile', payload)
        }
    }
})
