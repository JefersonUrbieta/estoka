import axios from 'axios'
import router from '../commons/router'
import store from '../commons/store/index'
import {exceptions, mutationTypes, notificacoesDefault} from '../commons/constants/index'

const requestSuccessInterceptor = config => {
    store.commit(mutationTypes.LOKI.SET_GLOBAL_LOADING, true)
    return config
}

const responseSuccessInterceptor = response => {
    store.commit(mutationTypes.LOKI.SET_GLOBAL_LOADING, false)
    store.commit(mutationTypes.LOKI.SET_LOADING_MESSAGE, store.state.defaultLoadingMessage)
    return response
}

const errorHandlerInterceptor = error => {
    store.commit(mutationTypes.LOKI.SET_GLOBAL_LOADING, false)
    store.commit(mutationTypes.LOKI.SET_LOADING_MESSAGE, store.state.defaultLoadingMessage)

    if (!possuiConexaoComInternet(error)) {
        handlerErroSemConexaoInternet()
    } else if (error.response.status === 500) {
        handlerErro500(error)
    } else if (error.response.status === 401) {
        handlerErroPerdaSessao()
    } else if (error.response.status === 404) {
        handlerErro404(error);
    } else {
        handlerErroDefault()
    }

    return Promise.reject(error)
}

function possuiConexaoComInternet(error) {
    return error.response
}

function handlerErroSemConexaoInternet() {
    store.commit(mutationTypes.MOSTRAR_MENSAGEM_ERRO, notificacoesDefault.ERRO_SEM_CONEXAO_INTERNET)
}

function handlerErro404(error) {
    handlerErro500(error)
    redirecionarParaHome()
}

function handlerErro500(error) {
    const exception = exceptions[error.response.data.exception]
    if (exception && exception.ignorarNotificacaoDefault) return

    const mensagem = formatarMensagemExcecao(exception, error.response.data.message)
    if (mensagem) {
        store.commit(mutationTypes.MOSTRAR_MENSAGEM_ERRO, mensagem)
    } else {
        store.commit(mutationTypes.MOSTRAR_MENSAGEM_ERRO_DEFAULT)
    }
}

function formatarMensagemExcecao(exception, params) {
    if (!exception) {
        return undefined
    }
    if (params) {
        const parsedParams = JSON.parse(params)
        return exception.mensagem.replace(/{(\d+)}/g, function (match, number) {
            return typeof parsedParams[number] !== 'undefined' ? parsedParams[number] : match
        })
    }
    return exception.mensagem
}


function handlerErroPerdaSessao() {
    store.commit(mutationTypes.MOSTRAR_MENSAGEM_ERRO_PERDA_SESSAO)
    setTimeout(() => window.location.reload(), 3000)
}

function handlerErroDefault() {
    store.commit(mutationTypes.MOSTRAR_MENSAGEM_ERRO_DEFAULT)
}

function redirecionarParaHome() {
    router.push({path: '/'})
}

axios.interceptors.request.use(requestSuccessInterceptor, errorHandlerInterceptor)
axios.interceptors.response.use(responseSuccessInterceptor, errorHandlerInterceptor)
//marca todas as requisicoes ajax
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = 'http://localhost:8080'
