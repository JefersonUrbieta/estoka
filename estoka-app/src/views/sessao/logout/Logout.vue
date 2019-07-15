<template>
    <div>

    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { actionTypes } from '@/commons/constants'

    export default {
        name: 'Logout',
        async mounted() {
            await this.realizarLogoutUsuario()
        },
        methods: {
            ...mapActions([actionTypes.REALIZAR_LOGOUT]),
            async realizarLogoutUsuario() {
                this.realizarLogout()
                this.$router.push({name: 'login'})
            }
        }
    }
</script>

