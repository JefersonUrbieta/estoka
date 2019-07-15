<template>
    <v-form class="se-login-form" v-model="valid">
        <v-text-field
            :error-messages="errors.collect('Login')"
            autofocus
            maxLength="100"
            name="Login"
            placeholder="Login"
            prepend-inner-icon="perm_identity"
            required
            solo
            v-model="value.login"
            v-validate="'required'"
        ></v-text-field>
        <v-text-field
            :error-messages="errors.collect('Senha')"
            @keyup.enter.native="$emit('enterPress')"
            maxLength="100"
            name="Senha"
            placeholder="Senha"
            prepend-inner-icon="vpn_key"
            required
            solo
            type="password"
            v-model="value.senha"
            v-validate="'required'"
        ></v-text-field>
    </v-form>
</template>

<script>

    export default {
        data() {
            return {
                checkbox: false,
                valid: false
            }
        },
        inject: ['$validator'],
        props: {
            value: {
                required: true
            }
        }
    }
</script>

<style lang="stylus">
    .se-login-form
        .v-input__slot
            -webkit-box-shadow none !important
            box-shadow none !important
            border 1px solid #7C8491;
</style>
