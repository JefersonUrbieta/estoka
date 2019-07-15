<template>
    <div>
        <az-container>
            <perfil-dados v-model="usuarioLocal"></perfil-dados>

        </az-container>
    </div>
</template>

<script>
    import _ from 'lodash'
    import { mapActions, mapState } from 'vuex'
    import { actionTypes } from '@/commons/constants'
    import ProfileDados from './ProfileDados'

    export default {
        name: 'Perfil',
        components: {ProfileDados},
        data() {
            return {
                usuarioId: undefined,
                usuario: {},
                usuarioLocal: {},
            }
        },
        computed: {
            ...mapState(['loki'])
        },
        async mounted() {
            this.setUsuarioId(this.loki.user.id)
            await this.buscarRegistroUsuario()
            this.setUsuarioLocal()
        },
        methods: {
            ...mapActions([actionTypes.BUSCAR_USUARIO, actionTypes.SALVAR_USUARIO]),
            async buscarRegistroUsuario() {
                this.setMensagemLoading('Carregando usuario...')
                if (this.usuarioId) {
                    this.usuario = await this.buscarUsuario(this.usuarioId)
                }
            },
            setUsuarioId( usuarioId ) {
                this.usuarioId = usuarioId
            },
            setUsuarioLocal() {
                this.usuarioLocal = _.cloneDeep(this.usuario)
            },
            async salvar() {
                const validado = await this.$validator._base.validateAll()
                if (!validado) {
                    return
                }
                this.setMensagemLoading('Salvando usuario...')
                this.usuario = await this.salvarUsuario(this.usuarioLocal)
                this.mostrarNotificacaoSucessoDefault()
            },
            cancelar() {
                this.usuarioLocal = _.cloneDeep(this.usuario)
            }
        }
    }
</script>
