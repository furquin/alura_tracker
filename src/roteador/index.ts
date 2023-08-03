import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Tarefas from '../views/tarefas.view.vue'
import Projetos from '../views/projetos.view.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        name: 'projetos',
        component: Projetos
    }
]
const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas,

})

export default roteador