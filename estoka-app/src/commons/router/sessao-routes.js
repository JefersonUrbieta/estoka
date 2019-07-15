import Cadastro from '../../views/sessao/cadastro/Cadastro'
import Login from '../../views/sessao/login/Login'
import Logout from '../../views/sessao/logout/Logout'
import Profile from '../../views/sessao/profile/Profile'

export default [
    {
        path: '/cadastro',
        name: 'Cadastro',
        component: Cadastro
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        page: {
            title: 'Perfil',
            subtitle: 'Dados do usuario'
        }
    },
]
