<template>
    <div class="az-form-content">
        <v-container fluid grid-list-xl>
            <v-layout align-center wrap>
                <v-flex md4 sm12 xs12>
                    <v-text-field
                        :disabled="!editavel"
                        label="Nome"
                        maxlength="255"
                        name="Nome"
                        placeholder="Ex: Material"
                        v-model="value.nome"
                        class="required"
                        required
                        :error-messages="errors.first('Nome')"
                        v-validate="'required'"
                    ></v-text-field>
                </v-flex>

                <v-flex md8 sm12 xs12>
                    <v-text-field
                        :disabled="!editavel"
                        label="Descricao"
                        maxlength="255"
                        name="Descricao"
                        placeholder="Ex: Descricao"
                        v-model="value.descricao"
                    ></v-text-field>
                </v-flex>

            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'UnidadeMedidaDados',
        inject: ['$validator'],
        props: {
            value: {
                required: true
            },
            editavel: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                valid: true,
                situations: ['Ativo', 'Inativo'],
                roles: ['Operador', 'Admin']
            }
        }
    }
</script>
