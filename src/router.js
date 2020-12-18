import vueRouter from 'vue-router'

import App from './App'
import Inicio from './components/Inicio'
import InicioProduct from './components/InicioProduct'
import InicioCategory from './components/InicioCategory'
import AgregarCategory from './components/AgregarCategory'
import ConsultarCategory from './components/ConsultarCategory'

const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes:[
            {
                path: '/',
                name: 'root',
                component: App
            },
            {
                path:'/inicio',
                name: 'inicio',
                component: Inicio
            },
            {
                path: '/category/agregar',
                name: 'agregar_category',
                component: AgregarCategory
            },
            {
                path: '/category/consultar',
                name: 'consultar_category',
                component: ConsultarCategory
            },
            {
                path: '/category/inicio',
                name: 'inicio_category',
                component: InicioCategory
            },
            {
                path: '/product/inicio',
                name: 'inicio_product',
                component: InicioProduct
            }
        ]
    }
)

export default router