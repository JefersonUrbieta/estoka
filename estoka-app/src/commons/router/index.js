import Vue from 'vue'
import Router from 'vue-router'
import sessaoRoutes from './sessao-routes'
import Inicio from '../../views/inicio/Inicio'
import Cadastro from '../../views/cadastro/Cadastro'
import CategoriaBusca from '../../views/cadastro/categoria/busca/CategoriaBusca'
import CategoriaDetalhe from '../../views/cadastro/categoria/detalhe/CategoriaDetalhe'
import UnidadeMedidaBusca from '../../views/cadastro/unidade-medida/busca/UnidadeMedidaBusca'
import UnidadeMedidaDetalhe from '../../views/cadastro/unidade-medida/detalhe/UnidadeMedidaDetalhe'
import FornecedorBusca from '../../views/fornecedor/busca/FornecedorBusca'
import FornecedorDetalhe from '../../views/fornecedor/detalhe/FornecedorDetalhe'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        ...sessaoRoutes,
        {
            path: '/',
            redirect: { name: 'Inicio' }
        },
        {
            path: '/inicio',
            name: 'Inicio',
            component: Inicio,
            meta: {
                menu: {
                    title: 'Inicio',
                    icon: 'format_list_bulleted'
                },
                page: {
                    title: 'Inicio',
                    subtitle: 'Dashboard sistema de Estoka'
                }
            }
        },
        {
            path: '/fornecedores',
            name: 'fornecedorBusca',
            component: FornecedorBusca,
            meta: {
                menu: {
                    title: 'Fornecedor',
                    icon: 'person'
                },
                page: {
                    title: 'Fornecedor',
                    subtitle: 'Lista geral dos Fornecedores'
                }
            }
        },
        {
            path: '/fornecedores/novo',
            name: 'fornecedorNovo',
            component: FornecedorDetalhe,
            meta: {
                page: {
                    title: 'Fornecedor',
                    subtitle: 'Novo Fornecedor'
                }
            }
        },
        {
            path: '/fornecedores/:id',
            name: 'fornecedorDetalhe',
            component: FornecedorDetalhe,
            meta: {
                page: {
                    title: 'Fornecedor',
                    subtitle: 'Detalhes do Fornecedor'
                }
            }
        },
        {
            path: '/cadastro',
            name: 'cadastro',
            component: Cadastro,
            meta: {
                menu: {
                    title: 'Cadastro',
                    icon: 'layers'
                }
            },
            children: [
                {
                    path: '/cadastro/categorias',
                    name: 'categoriaBusca',
                    component: CategoriaBusca,
                    meta: {
                        menu: {
                            title: 'Categoria',
                            icon: 'person'
                        },
                        page: {
                            title: 'Categoria',
                            subtitle: 'Lista geral das Categoria'
                        }
                    }
                },
                {
                    path: '/cadastro/categorias/novo',
                    name: 'categoriaNovo',
                    component: CategoriaDetalhe,
                    meta: {
                        page: {
                            title: 'Categoria',
                            subtitle: 'Nova Categoria'
                        }
                    }
                },
                {
                    path: '/cadastro/categorias/:id',
                    name: 'categoriaDetalhe',
                    component: CategoriaDetalhe,
                    meta: {
                        page: {
                            title: 'Categoria',
                            subtitle: 'Detalhes da Categoria'
                        }
                    }
                },
                {
                    path: '/cadastro/unidades-medidas',
                    name: 'unidadeMedidaBusca',
                    component: UnidadeMedidaBusca,
                    meta: {
                        menu: {
                            title: 'Unidade Medida',
                            icon: 'person'
                        },
                        page: {
                            title: 'Unidade Medida',
                            subtitle: 'Lista geral das Unidades de Medida'
                        }
                    }
                },
                {
                    path: '/cadastro/unidades-medidas/novo',
                    name: 'unidadeMedidaNovo',
                    component: UnidadeMedidaDetalhe,
                    meta: {
                        page: {
                            title: 'Unidade Medida',
                            subtitle: 'Nova Unidade de Medida'
                        }
                    }
                },
                {
                    path: '/cadastro/unidades-medidas/:id',
                    name: 'unidadeMedidaDetalhe',
                    component: UnidadeMedidaDetalhe,
                    meta: {
                        page: {
                            title: 'Unidade Medida',
                            subtitle: 'Detalhes da Unidade de Medida'
                        }
                    }
                }
            ]
        }
    ]
})
