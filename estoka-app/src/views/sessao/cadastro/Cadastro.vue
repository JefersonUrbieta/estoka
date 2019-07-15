<template>
    <v-dialog fullscreen value="true">
        <v-card color="#fff" flat tile>
            <v-card-text>
                <v-container text-xs-center>
                    <v-layout row wrap>
                        <v-flex md8 offset-md2>
                            <v-card class="session-wrapper" color="grey lighten-3" elevation="5">
                                <div class="session-content">
                                    <v-layout row wrap>
                                        <v-flex hidden-sm-and-down md6>
                                            <v-card>
                                                <v-img
                                                    height="500px"
                                                    src="https://cdn.vuetifyjs.com/images/cards/plane.jpg">
                                                </v-img>
                                            </v-card>
                                        </v-flex>
                                        <v-flex md6 pa-4 sm-12>
                                            <h2 class="mb-3 titulo">Bem-vindo ao sistema <span class="nome-produto">Primecash</span>
                                            </h2>

                                            <p class="subtitulo">
                                                Aqui você poderá realizar suas operações de compra e venda de forma
                                                simples e organizada!
                                            </p>

                                            <cadastro-form @enterPress="realizarLoginUsuario" v-model="user"></cadastro-form>
                                            <div>
                                                <v-btn @click="realizarLoginUsuario" block color="primary" large>Login
                                                </v-btn>
                                            </div>
                                        </v-flex>
                                    </v-layout>
                                </div>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import { mapActions } from 'vuex'
    import { actionTypes } from '@/commons/constants'
    import CadastroForm from './CadastroForm'

    export default {
        name: 'Login',
        components: {CadastroForm},
        data() {
            return {
                user: {
                    login: '',
                    senha: ''
                }
            }
        },
        methods: {
            ...mapActions([actionTypes.REALIZAR_LOGIN]),
            async realizarLoginUsuario() {
                const validado = await this.$validator._base.validateAll()
                if (!validado) {
                    return
                }
                await this.realizarLogin(this.user)
            }
        }
    }
</script>

<style lang="stylus">
    .session-wrapper
        margin: 40px auto auto

        .titulo
            width: 100% !important
            font-size: 28px
            text-align: center !important
            color: #555
            line-height: 1
            padding: 10px 0 10px 0

            .nome-produto
                color: #1345FA

        .subtitulo
            width: 100% !important
            font-size: 16px
            text-align: center !important
            color: #464D5A
            line-height: 1
</style>
