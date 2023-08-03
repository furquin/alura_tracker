import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Tarefas from '../views/tarefas.view.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'tarefas',
        component: Tarefas
    }
]
const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas,

})

export default roteador