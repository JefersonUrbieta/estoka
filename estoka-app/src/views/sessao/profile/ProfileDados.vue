<template>
    <div class="az-form-content">
        <v-container fluid grid-list-xl>
            <v-layout align-center wrap>
                <v-flex md4 sm12 xs12>
                    <v-text-field
                        :disabled="!editavel"
                        :error-messages="errors.first('Nome')"
                        class="required"
                        label="Nome"
                        maxlength="100"
                        name="Nome"
                        placeholder="Ex: Thalita"
                        required
                        v-model="value.nome"
                        v-validate="'required'"
                    ></v-text-field>
                </v-flex>

                <v-flex md4 sm12 xs12>
                    <v-text-field
                        :disabled="!editavel"
                        :error-messages="errors.first('Email')"
                        class="required"
                        label="E-mail"
                        maxlength="100"
                        name="Email"
                        placeholder="Ex: thalita@email.com"
                        required
                        v-model="value.email"
                        v-validate="'required'"
                    ></v-text-field>
                </v-flex>

                <v-flex md4 sm12 xs12>
                    <v-select
                        :disabled="!editavel"
                        :error-messages="errors.first('Situação')"
                        :items="situations"
                        label="Situação"
                        name="Situação"
                        placeholder="Ex: Ativo"
                        required
                        v-model="value.situacao"
                        v-validate="'required'"
                    ></v-select>
                </v-flex>

                <v-flex md4 sm12 xs12>
                    <v-text-field
                        :disabled="!editavel"
                        label="CPF"
                        mask="###.###.###-##"
                        maxlength="14"
                        placeholder="000.000.000-00"
                        v-model="value.cpf"
                    ></v-text-field>
                </v-flex>

                <v-flex md4 sm12 xs12>
                    <v-text-field
                        :disabled="!editavel"
                        label="Telefone"
                        mask="(##) #####-####"
                        maxlength="15"
                        placeholder="(00) 00000-0000"
                        v-model="value.phone"
                    ></v-text-field>
                </v-flex>

                <v-flex md4 sm12 xs12>
                    <v-select
                        :disabled="!editavel"
                        :error-messages="errors.first('Papel')"
                        :items="roles"
                        class="required"
                        label="Papel"
                        name="Papel"
                        placeholder="Ex: Operador"
                        required
                        v-model="value.papel"
                        v-validate="'required'"></v-select>
                </v-flex>

                <v-flex md4 sm12 xs12>
                    <v-text-field
                        :disabled="!editavel"
                        :error-messages="errors.first('Login')"
                        class="required"
                        label="Login"
                        maxlength="100"
                        name="Login"
                        placeholder="Ex: thalita"
                        required
                        v-model="value.login"
                        v-validate="'required'"
                    ></v-text-field>
                </v-flex>

                <v-flex md4 sm12 xs12>
                    <v-text-field
                        :disabled="!editavel"
                        counter
                        label="Nova Senha"
                        maxlength="100"
                        placeholder="Ex: Senha123"
                        type="password"
                        v-model="value.newPassword"
                    ></v-text-field>
                </v-flex>

            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'ProfileDados',
        inject: ['$validator'],
        props: {
            value: {
                required: true
            },
            editavel: {
                type: Boolean,
                default: true
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
