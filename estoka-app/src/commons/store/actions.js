import axios from 'axios'
import {actionTypes, mutationTypes} from '../constants'

export default {

    async [actionTypes.BUSCAR_CATEGORIAS]() {
        const {data} = await axios.get(`/categoria`)
        return data
    },

    async [actionTypes.BUSCAR_CATEGORIA](context, id) {
        const {data} = await axios.get(`categoria/${id}`)
        return data
    },

    async [actionTypes.SALVAR_CATEGORIA](context, item) {
        if (item.id) {
            const {data} = await axios.put(`categoria/${item.id}`, item)
            return data
        } else {
            const {data} = await axios.post(`categoria`, item)
            return data
        }
    },

    async [actionTypes.REMOVER_CATEGORIA](context, id) {
        if (id) {
            const {data} = await axios.delete(`categoria/${id}`)
            return data
        }
    },

    async [actionTypes.BUSCAR_UNIDADE_MEDIDAS]() {
        const {data} = await axios.get(`/unidade-medida`)
        return data
    },

    async [actionTypes.BUSCAR_UNIDADE_MEDIDA](context, id) {
        const {data} = await axios.get(`unidade-medida/${id}`)
        return data
    },

    async [actionTypes.SALVAR_UNIDADE_MEDIDA](context, item) {
        if (item.id) {
            const {data} = await axios.put(`unidade-medida/${item.id}`, item)
            return data
        } else {
            const {data} = await axios.post(`unidade-medida`, item)
            return data
        }
    },

    async [actionTypes.REMOVER_UNIDADE_MEDIDA](context, id) {
        if (id) {
            const {data} = await axios.delete(`unidade-medida/${id}`)
            return data
        }
    },

    async [actionTypes.BUSCAR_FORNECEDORS]() {
        const {data} = await axios.get(`/fornecedor`)
        return data
    },

    async [actionTypes.BUSCAR_FORNECEDOR](context, id) {
        const {data} = await axios.get(`fornecedor/${id}`)
        return data
    },

    async [actionTypes.SALVAR_FORNECEDOR](context, item) {
        if (item.id) {
            const {data} = await axios.put(`fornecedor/${item.id}`, item)
            return data
        } else {
            const {data} = await axios.post(`fornecedor`, item)
            return data
        }
    },

    async [actionTypes.REMOVER_FORNECEDOR](context, id) {
        if (id) {
            const {data} = await axios.delete(`fornecedor/${id}`)
            return data
        }
    },

}
