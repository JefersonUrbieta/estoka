<template>
    <div class="az-actions-form" v-if="editavel" :class="editavel ? 'show': 'hide'">
        <div class="align-left"></div>
        <div class="align-right">
            <button class="action-secundary" type="button" @click="$emit('cancelar')">Cancelar</button>
            <button class="action-primary" type="button" @click="$emit('salvar')">Salvar</button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'FormularioPadraoAcoes',
  props: {
    editavel: {
      type: Boolean,
      default: false
    }
  }
}
</script>
