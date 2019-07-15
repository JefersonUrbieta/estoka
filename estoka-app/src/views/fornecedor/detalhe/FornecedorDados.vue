<template>
    <div class="az-form-content">
        <v-container fluid grid-list-xl>
            <v-layout align-center wrap>
                <v-flex md6 sm12 xs12>
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

                <v-flex md6 sm12 xs12>
                    <v-text-field
                            :disabled="!editavel"
                            label="CNPJ"
                            name="CNPJ"
                            mask="##.###.###/####-##"
                            maxlength="14"
                            placeholder="00.000.000/0000-00"
                            v-model="value.cnpj"
                            class="required"
                            required
                            :error-messages="errors.first('CNPJ')"
                            v-validate="'required'"
                    ></v-text-field>
                </v-flex>

                <v-flex md6 sm12 xs12>
                    <v-text-field
                            :disabled="!editavel"
                            label="E-mail"
                            maxlength="255"
                            name="E-mail"
                            placeholder="Ex: Descricao"
                            v-model="value.email"
                            class="required"
                            required
                            :error-messages="errors.first('E-mail')"
                            v-validate="'required'"
                    ></v-text-field>
                </v-flex>

                <v-flex md6 sm12 xs12>
                    <v-text-field
                            :disabled="!editavel"
                            label="Telefone"
                            name="Telefone"
                            mask="(##) #####-####"
                            maxlength="15"
                            placeholder="(00) 00000-0000"
                            v-model="value.telefone"
                            class="required"
                            required
                            :error-messages="errors.first('Telefone')"
                            v-validate="'required'"
                    ></v-text-field>
                </v-flex>

                <v-flex sm12 xs12>
                    <v-text-field
                            :disabled="!editavel"
                            label="Observações"
                            maxlength="255"
                            name="Observações"
                            placeholder="Ex: Descricao"
                            v-model="value.observacoes"
                    ></v-text-field>
                </v-flex>

            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'FornecedorDados',
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
