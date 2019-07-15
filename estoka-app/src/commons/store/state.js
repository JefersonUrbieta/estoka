export default {
    anexosLicitacao: [],
    comissao: {},
    comissaoBusca: {
        filtros: {
            descricaoSigla: {
                value: null,
                default: null,
                label: 'Nome ou Sigla'
            }
        }
    },
    defaultLoadingMessage: 'Processando...',
    fileManagerUri: 'hal/public/arquivos',
    fornecedorAceite: {},
    licitacao: {},
    licitacaoBusca: {
        paginacao: {
            page: 1, rowsPerPage: 10, sortBy: null, descending: false
        },
        filtros: {
            objeto: {
                value: null,
                default: null,
                label: 'Objeto'
            },
            status: {
                value: null,
                default: null,
                label: 'Status'
            },
            idOrgao: {
                value: null,
                default: null,
                label: 'Responsável'
            }
        }
    },
    licitacoesFavoritasFornecedorBusca: {
        paginacao: {
            page: 1, rowsPerPage: 5, sortBy: null, descending: false
        }
    },
    licitacoesFornecedorComProposta: {
        paginacao: {
            page: 1, rowsPerPage: 5, sortBy: null, descending: false
        }
    },
    lotesLicitacao: [],
    notificacao: {},
    orgaos: [],
    propostaResumo: {},
    termoAceiteProposta: {},
    usuario: {},
    usuarioBusca: {
        filtros: {
            nomeEmailCpf: {
                value: null,
                default: null,
                label: 'Nome, Email ou CPF'
            }
        }
    }
}
